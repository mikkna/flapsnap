import React, { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import Item from "./Item";
import { getStyleObject } from "./utils";
import classnames from "classnames";
import Position from "../Position";

interface Props {
  isGrouped?: boolean;
  position?: Position;
  onCreate: (item: Item) => void;
  onClose: () => void;
}

const NewItemFrom: React.FC<Props> = ({ isGrouped = false, position, onCreate, onClose }) => {
  const [newItemTitle, setNewItemTitle] = useState("");

  function handleCreateItem(event: FormEvent) {
    event.preventDefault();

    if (!newItemTitle.length) return;

    const item = new Item({ position, title: newItemTitle });
    onCreate(item);
    setNewItemTitle("");
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
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

  function handleTitleChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
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

export default NewItemFrom;
