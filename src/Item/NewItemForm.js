import React, { useState } from "react";
import Types from "prop-types";
import Item from "./Item";

const NewItemFrom = ({ isGrouped = false, position, onCreate, onClose }) => {
  const [newItemTitle, setNewItemTitle] = useState("");

  function addNewItem(event) {
    event.preventDefault();

    if (!newItemTitle.length) return;

    const item = new Item({ position, title: newItemTitle });
    onCreate(item);
    setNewItemTitle("");
  }

  function getStyle() {
    if (!position) return {};

    return { left: position.x, top: position.y };
  }

  function handleTitleChange({ target: { value } }) {
    setNewItemTitle(value);
  }

  function handleInputKeyDown(event) {
    switch (event.keyCode) {
      case 27: // esc
        return onClose();
      case 8:  // backspace
        if (newItemTitle.length) return;
        return onClose();
      default:
        return;
    }
  }

  function handleCreateGroup() {
    const group = new Item({
      position: position,
      title: newItemTitle,
      items: []
    });
    onCreate(group);
  }

  return (
    <form
      className={"new-item item" + (position ? " item--absolute" : "")}
      style={getStyle()}
      onSubmit={addNewItem}
    >
      <input
        type="text"
        className="item-content"
        autoFocus={true}
        value={newItemTitle}
        onChange={handleTitleChange}
        onKeyDown={handleInputKeyDown}
      />
      {isGrouped || (
        <button type="button" onClick={handleCreateGroup}>
          Group
        </button>
      )}
    </form>
  );
};

NewItemFrom.propTypes = {
  isGrouped: Types.bool,
  position: Types.shape({}),
  onCreate: Types.func.isRequired,
  onClose: Types.func.isRequired
};

export default NewItemFrom;
