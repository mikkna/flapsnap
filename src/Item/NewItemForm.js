import React, { useState } from "react";
import Types from "prop-types";
import Item from "./Item";
import { getStyleObject } from "./utils";
import classnames from "classnames";

const NewItemFrom = ({ isGrouped = false, position, onCreate, onClose }) => {
  const [newItemTitle, setNewItemTitle] = useState("");

  function handleCreateItem(event) {
    event.preventDefault();

    if (!newItemTitle.length) return;

    const item = new Item({ position, title: newItemTitle });
    onCreate(item);
    setNewItemTitle("");
  }

  function handleInputKeyDown(event) {
    switch (event.keyCode) {
      case 27: // esc
        return onClose();
      case 8: // backspace
        if (newItemTitle.length) return;
        return onClose();
      default:
        return;
    }
  }

  function handleTitleChange({ target: { value } }) {
    setNewItemTitle(value);
  }

  function handleCreateGroup() {
    const group = new Item({
      position: position,
      title: newItemTitle,
      items: [],
    });
    onCreate(group);
  }

  return (
    <form
      className={classnames("new-item item", { "item--absolute": position })}
      style={getStyleObject(position)}
      onSubmit={isGrouped ? handleCreateItem : handleCreateGroup}
    >
      <input
        type="text"
        className="item-content"
        autoFocus={true}
        value={newItemTitle}
        onChange={handleTitleChange}
        onKeyDown={handleInputKeyDown}
      />
    </form>
  );
};

NewItemFrom.propTypes = {
  isGrouped: Types.bool,
  position: Types.shape({}),
  onCreate: Types.func.isRequired,
  onClose: Types.func.isRequired,
};

export default NewItemFrom;
