import React, { useState } from "react";
import Types from "prop-types";
import Position, { getOffset } from "../Position";
import Item from "../Item";
import { ItemComponent, NewItemForm } from "../Item";
import Sortable from "react-sortablejs";

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
    if (event.target !== event.currentTarget) return;

    const position = new Position({
      x: event.pageX - dragStartOffset.x,
      y: event.pageY - dragStartOffset.y
    });
    const editedGroup = cloneItem({ position });

    onChange(editedGroup);
  }

  function toggleNewItemForm() {
    setShowNewItemForm(!showNewItemForm);
  }

  function handleItemCreate(item) {
    const editedGroup = cloneItem({ items: [...items, item] });
    onChange(editedGroup);
  }

  function handleItemRemove(item) {
    const filteredItems = items.filter(i => i.timeStamp !== item.timeStamp);

    const editedGroup = cloneItem({ items: filteredItems });
    onChange(editedGroup);
    setShowNewItemForm(false);
  }

  function handleItemOrderChange(order) {
    const sortedItems = order.map(timeStamp =>
      items.find(item => item.timeStamp === parseInt(timeStamp))
    );
    const editedGroup = cloneItem({ items: sortedItems });
    onChange(editedGroup);
  }

  function mapItem(item) {
    return (
      <ItemComponent
        {...item}
        data-id={item.timeStamp}
        onRemove={() => handleItemRemove(item)}
        key={item.timeStamp}
        onClick={() => handleItemRemove(item)}
      />
    );
  }

  function cloneItem(params = {}) {
    return new Item({
      position,
      title,
      items,
      timeStamp,
      ...params
    });
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
        <div className="group-items">
          <Sortable tag="ul" onChange={handleItemOrderChange}>
            {items.map(mapItem)}
          </Sortable>

          {showNewItemForm && (
            <NewItemForm
              isGrouped
              onCreate={handleItemCreate}
              onClose={toggleNewItemForm}
            />
          )}
        </div>
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
