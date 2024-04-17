import React, { useState, useEffect, MouseEvent } from "react";
import classnames from "classnames";
import "./App.scss";

import Item, { NewItemForm } from "./Item";
import Position from "./Position";
import { GroupComponent } from "./Group";
import { Draggable } from "./Draggable";
import firebase from "firebase";
import { toPlainObject } from "./utils";

interface Props {
  db: firebase.firestore.Firestore;
  userId: string;
}

type Data = {
  items?: Item[];
  devItems?: Item[];
};

const env = process.env.NODE_ENV;
const isProduction = env === "production";
const PERSIST_IN_DEV = true;
const PERSIST = isProduction || PERSIST_IN_DEV;
const collection = "items";
const field = isProduction ? "items" : "devItems";

const App: React.FC<Props> = ({ db, userId }) => {
  const doc = userId;

  const [history, setHistory] = useState<Item[][]>([]);
  const [data, setData] = useState<Data>();
  const [newItemPosition, setNewItemPosition] = useState<Position>();
  const [isObfuscated, setIsObfuscated] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const items = data?.[field] || [];

  const setItems = (newItems: Item[]) => {
    setData((currentData) => ({
      ...currentData,
      [field]: newItems,
    }));
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 90 && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleUndo();
      }
    });
  });

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    db.collection(collection)
      .doc(doc)
      .get()
      .then((currentDoc: firebase.firestore.DocumentSnapshot<Data>) => {
        if (currentDoc.exists) {
          setData(currentDoc.data() || {});
        }
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }, [db, doc]);

  useEffect(() => {
    const persistRemoteData = async () => {
      if (PERSIST && data) {
        setLoading(true);
        setError(undefined);
        try {
          await db.collection(collection).doc(doc).set(toPlainObject(data));
        } catch (e) {
          setError(e as Error);
        }
        setLoading(false);
      }
    };
    persistRemoteData();
  }, [data, db, doc]);

  function toggleAddItem(event: MouseEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;

    const position = new Position({ x: event.pageX, y: event.pageY });
    setNewItemPosition(position);
  }

  async function setItemsAndSave(newItems: Item[], saveHistory = true) {
    if (saveHistory) {
      setHistory([...history, items]);
    }
    setItems(newItems);
  }

  function handleItemCreate(item: Item) {
    setItemsAndSave([...items, item]);
    setNewItemPosition(undefined);
  }

  function handleItemChange(newValue: Item, oldValue: Item) {
    const filteredItems = items.filter(
      (i) => i.timeStamp !== oldValue.timeStamp
    );

    setItemsAndSave([...filteredItems, newValue]);
    setNewItemPosition(undefined);
  }

  function handleItemRemove(item: Item) {
    const filteredItems = items.filter((i) => i.timeStamp !== item.timeStamp);
    setItemsAndSave([...filteredItems]);
  }

  function handleUndo() {
    if (!history.length) return;

    setItemsAndSave(history[history.length - 1] || [], false);

    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
  }

  function handleObfuscate() {
    setIsObfuscated(!isObfuscated);
  }

  function mapGroup(group: Item) {
    return (
      <Draggable
        position={group.position}
        onDragEnd={(newPos) =>
          handleItemChange({ ...group, position: newPos }, group)
        }
        key={group.timeStamp}
      >
        <GroupComponent
          {...group}
          onRemove={() => handleItemRemove(group)}
          onChange={(newValue) => handleItemChange(newValue, group)}
        />
      </Draggable>
    );
  }

  const groupElements = items.map((group) => {
    return mapGroup(group);
  });

  return (
    <div className="app">
      <div
        className={classnames("board", { obfuscated: isObfuscated }, env)}
        onClick={toggleAddItem}
      >
        <ul>{groupElements}</ul>
        {newItemPosition && (
          <NewItemForm
            onCreate={handleItemCreate}
            position={newItemPosition}
            onClose={() => setNewItemPosition(undefined)}
          />
        )}
        <button
          className={classnames("undo action", { visible: history.length })}
          onClick={handleUndo}
        >
          <span role="img" aria-label="Undo">
            🤭
          </span>
        </button>
        <div className={classnames("loading action", { visible: loading })}>
          <span role="img" aria-label="Loading">
            ♻️
          </span>
        </div>
        <div className={classnames("error action", { visible: !!error })}>
          <span role="img" aria-label="Error">
            ⛔
          </span>
        </div>

        <button
          className={classnames("obfuscate action ", { visible: items.length })}
          onClick={handleObfuscate}
        >
          <span role="img" aria-label="Obfuscate">
            {isObfuscated ? "🐵" : "🙈"}
          </span>
        </button>
        {!!error && (
          <div className="error-modal">
            <h2>{error.name}</h2>
            <p>{error.message}</p>
            <br />
            {error.stack && <pre>{error.stack}</pre>}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
