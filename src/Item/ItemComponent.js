import React, { useState } from "react";
import Types from "prop-types";
import Position from "../Position";
import Item from "./Item";

const ItemComponent = ({
  position,
  title,
  timeStamp,
  onChange,
  onRemove,
  onClick,
  ...otherProps
}) => {
  const [deleted, setDeleted] = useState(false);

  function handleItemDragEnd(event) {
    const position = new Position({ x: event.pageX, y: event.pageY });
    const editedItem = new Item({ position, title, timeStamp });

    onChange(editedItem);
  }

  function getStyle() {
    if (!position) return {};

    return { left: position.x, top: position.y };
  }

  function handleClick() {
    setDeleted(true);

    setTimeout(() => {
      onClick();
    }, 200);
  }

  return (
    <li
      {...otherProps}
      onClick={handleClick}
      draggable={!!position}
      onDragEnd={handleItemDragEnd}
      className={
        "item" +
        (position ? " item--absolute " : "") +
        (deleted ? " item--collapse " : "")
      }
      style={getStyle()}
    >
      <span className="item-content">{title}</span>
      <span className="item-remove item-button" onClick={onRemove}>
        &times;
      </span>
    </li>
  );
};

ItemComponent.propTypes = {
  position: Types.shape({ x: Types.number, y: Types.number }),
  title: Types.string.isRequired,
  onChange: Types.func,
  onRemove: Types.func.isRequired,
  onClick: Types.func
};

ItemComponent.defaultProps = {
  onClick: () => {},
  onChange: () => {}
};

export default ItemComponent;
