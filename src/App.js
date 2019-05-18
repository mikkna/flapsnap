import React, { useState } from "react";
import "./App.scss";

import { NewItemForm } from "./Item";
import Position from "./Position";
import { GroupComponent } from "./Group";
import { ItemComponent } from "./Item";


const itemsFromLocalStorage = JSON.parse(
  localStorage.getItem("dragly-items") || "[]"
);

function App() {
  const [items, setItems] = useState(itemsFromLocalStorage);
  const [newItemPosition, setNewItemPosition] = useState(null);

  function toggleAddItem(event) {
    if (event.target !== event.currentTarget) return;

    const position = new Position({ x: event.pageX, y: event.pageY });
    setNewItemPosition(position);
  }

  function setItemsAndSave(items) {
    setItems(items);
    localStorage.setItem("dragly-items", JSON.stringify(items));
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
      </div>
    </div>
  );
}

export default App;
