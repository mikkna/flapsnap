import React, { useState, useEffect } from "react";
import "./App.scss";

import { NewItemForm } from "./Item";
import Position from "./Position";
import { GroupComponent } from "./Group";
import { ItemComponent } from "./Item";

const itemsFromLocalStorage = JSON.parse(
  localStorage.getItem("dragly-items") || "[]"
);

function App() {
  const [history, setHistory] = useState([]);
  const [items, setItems] = useState(itemsFromLocalStorage);
  const [newItemPosition, setNewItemPosition] = useState(null);

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

  const itemElements = items.map(item => {
    if (item.items) {
      return mapGroup(item);
    }
    return mapItem(item);
  });

  function mapItem(item) {
    return (
      <ItemComponent
        {...item}
        onRemove={() => handleItemRemove(item)}
        onChange={newValue => handleItemChange(newValue, item)}
        key={item.timeStamp}
      />
    );
  }

  function mapGroup(group) {
    return (
      <GroupComponent
        {...group}
        onRemove={() => handleItemRemove(group)}
        onChange={newValue => handleItemChange(newValue, group)}
        key={group.timeStamp}
      />
    );
  }

  const input = (
    <NewItemForm
      onCreate={handleItemCreate}
      position={newItemPosition}
      onClose={() => setNewItemPosition(null)}
    />
  );

  return (
    <div className="app">
      <div className="board" onClick={toggleAddItem}>
        <ul>{itemElements}</ul>
        {newItemPosition && input}
        <button
          className={"undo " + (history.length ? "visible" : "")}
          onClick={handleUndo}
        >
          <span role="img" aria-label="Undo">
            🤭
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
