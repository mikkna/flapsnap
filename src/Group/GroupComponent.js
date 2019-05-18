import React, { useState } from "react";
import Types from "prop-types";
import Position, { getOffset } from "../Position";
import Item from "../Item";
import { ItemComponent, NewItemForm } from "../Item";

const GroupComponent = ({
  position,
  title,
  items,
  timeStamp,
  onChange,
  onRemove
}) => {
  const [showNewItemForm, setShowNewItemForm] = useState(null);

  let dragStartOffset;

  function handleItemDragStart(event) {
    const pointerPosition = { x: event.pageX, y: event.pageY };
    const elementPosition = getOffset(event.target);
    dragStartOffset = {
      x: pointerPosition.x - elementPosition.x,
      y: pointerPosition.y - elementPosition.y
    };
  }
  function handleItemDragEnd(event) {
    const position = new Position({
      x: event.pageX - dragStartOffset.x,
      y: event.pageY - dragStartOffset.y
    });
    const editedGroup = new Item({ position, title, items, timeStamp });

    onChange(editedGroup);
  }

  function toggleNewItemForm() {
    setShowNewItemForm(!showNewItemForm);
  }

  function handleItemCreate(item) {
    const editedGroup = new Item({
      position,
      title,
      items: [...items, item],
      timeStamp
    });
    onChange(editedGroup);
  }

  function handleItemRemove(item) {
    const filteredItems = items.filter(i => i.timeStamp !== item.timeStamp);

    const editedGroup = new Item({
      position,
      title,
      items: filteredItems,
      timeStamp
    });
    onChange(editedGroup);
    setShowNewItemForm(false);
  }

  function mapItem(item) {
    return (
      <ItemComponent
        {...item}
        onRemove={() => handleItemRemove(item)}
        key={item.timeStamp}
        onClick={() => handleItemRemove(item)}
      />
    );
  }

  return (
    <div
      draggable={true}
      onDragStart={handleItemDragStart}
      onDragEnd={handleItemDragEnd}
      className={"item list-item group" + (position ? " item--absolute" : "")}
      style={{ left: position.x, top: position.y }}
    >
      {title && <span className="item-content">{title}</span>}
      <span className="item-add item-button" onClick={toggleNewItemForm}>
        +
      </span>
      <span className="item-remove item-button" onClick={onRemove}>
        &times;
      </span>

      {(items.length || showNewItemForm) && (
        <ul className="group-items">
          {items.map(mapItem)}
          {showNewItemForm && (
            <NewItemForm
              isGrouped
              onCreate={handleItemCreate}
              onClose={toggleNewItemForm}
            />
          )}
        </ul>
      )}
    </div>
  );
};

GroupComponent.propTypes = {
  position: Types.shape({ x: Types.number, y: Types.number }).isRequired,
  title: Types.string.isRequired,
  items: Types.array.isRequired,
  onChange: Types.func.isRequired,
  onRemove: Types.func.isRequired
};

export default GroupComponent;
