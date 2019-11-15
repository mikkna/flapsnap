import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./App.scss";

import { NewItemForm } from "./Item";
import Position from "./Position";
import { GroupComponent } from "./Group";
import { Draggable } from "./Draggable";

const itemsFromLocalStorage = JSON.parse(
  localStorage.getItem("dragly-items") || "[]"
);

function App() {
  const [history, setHistory] = useState([]);
  const [items, setItems] = useState(itemsFromLocalStorage);
  const [newItemPosition, setNewItemPosition] = useState(null);
  const [isObfuscated, setIsObfuscated] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 90 && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleUndo();
      }
    });
  });

  function toggleAddItem(event) {
    if (event.target !== event.currentTarget) return;

    const position = new Position({ x: event.pageX, y: event.pageY });
    setNewItemPosition(position);
  }

  function setItemsAndSave(newItems, saveHistory = true) {
    if (saveHistory) {
      setHistory([...history, items]);
    }
    setItems(newItems);
    localStorage.setItem("dragly-items", JSON.stringify(newItems));
  }

  function handleItemCreate(item) {
    setItemsAndSave([...items, item]);
    setNewItemPosition(null);
  }

  function handleItemChange(newValue, oldValue) {
    const filteredItems = items.filter(i => i.timeStamp !== oldValue.timeStamp);

    setItemsAndSave([...filteredItems, newValue]);
    setNewItemPosition(null);
  }

  function handleItemRemove(item) {
    const filteredItems = items.filter(i => i.timeStamp !== item.timeStamp);
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

  function mapGroup(group) {
    return (
      <Draggable
        position={group.position}
        onDragEnd={newPos =>
          handleItemChange({ ...group, position: newPos }, group)
        }
        key={group.timeStamp}
      >
        <GroupComponent
          {...group}
          onRemove={() => handleItemRemove(group)}
          onChange={newValue => handleItemChange(newValue, group)}
        />
      </Draggable>
    );
  }

  const groupElements = items.map(group => {
    return mapGroup(group);
  });

  return (
    <div className="app">
      <div
        className={classnames("board", { obfuscated: isObfuscated })}
        onClick={toggleAddItem}
      >
        <ul>{groupElements}</ul>
        {newItemPosition && (
          <NewItemForm
            onCreate={handleItemCreate}
            position={newItemPosition}
            onClose={() => setNewItemPosition(null)}
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
