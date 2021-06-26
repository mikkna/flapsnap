import React, { useState, useEffect, MouseEvent } from "react";
import classnames from "classnames";
import "./App.scss";

import Item, { NewItemForm } from "./Item";
import Position from "./Position";
import { GroupComponent } from "./Group";
import { Draggable } from "./Draggable";
import firebase from "firebase";

interface Props {
  db: firebase.firestore.Firestore;
  userId: string;
}

const env = process.env.NODE_ENV;
const PERSIST_IN_DEV = false;
const PERSIST = env === 'production' || PERSIST_IN_DEV;

const App: React.FC<Props> = ({ db, userId }) => {
  const [history, setHistory] = useState<Item[][]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [newItemPosition, setNewItemPosition] = useState<Position>();
  const [isObfuscated, setIsObfuscated] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 90 && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleUndo();
      }
    });
  });

  useEffect(() => {
    db.collection("items")
      .doc(userId)
      .get()
      .then((currentDoc) => {
        if (currentDoc.exists) {
          setItems(currentDoc.data()?.items);
        }
      });
  }, [db, userId]);

  function toggleAddItem(event: MouseEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;

    const position = new Position({ x: event.pageX, y: event.pageY });
    setNewItemPosition(position);
  }

  function setItemsAndSave(newItems: Item[], saveHistory = true) {
    if (saveHistory) {
      setHistory([...history, items]);
    }
    setItems(newItems);
    if (PERSIST) {
      db.collection("items")
        .doc(userId)
        .set({ items: JSON.parse(JSON.stringify(newItems)) });
    }
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

        <button
          className={classnames("obfuscate action ", { visible: items.length })}
          onClick={handleObfuscate}
        >
          <span role="img" aria-label="Obfuscate">
            {isObfuscated ? "🐵" : "🙈"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
