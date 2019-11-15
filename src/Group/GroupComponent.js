import React, { useState } from "react";
import Types from "prop-types";
import Item from "../Item";
import { ItemComponent, NewItemForm } from "../Item";
import Sortable from "react-sortablejs";
import classnames from "classnames";
import { Undraggable } from "../Draggable";

const GroupComponent = ({
  position,
  title,
  items,
  timeStamp,
  onChange,
  onRemove
}) => {
  const shouldShowItemFormByDefault = !items.length;
  const [showNewItemForm, setShowNewItemForm] = useState(
    shouldShowItemFormByDefault
  );

  const [deleted, setDeleted] = useState(false);

  function handleGroupDelete() {
    setDeleted(true);

    setTimeout(() => {
      onRemove();
    }, 200);
  }

  function toggleNewItemForm(e) {
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
    console.log(
      title,
      order,
      items.map(i => i.timeStamp.toString())
    );

    const sortedItems = order.map(timeStamp =>
      items.find(item => item.timeStamp === parseInt(timeStamp))
    );
    const editedGroup = cloneItem({ items: sortedItems });
    onChange(editedGroup);
  }

  function mapItem(item) {
    return (
      <ItemComponent
        key={item.timeStamp}
        data-id={item.timeStamp}
        title={item.title}
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

  function getStyle() {
    return {
      transform: deleted ? "scale(0.7)" : ""
    };
  }

  return (
    <div
      className={classnames("item group", {
        "item--collapse": deleted
      })}
      style={getStyle()}
    >
      {title && <span className="item-content">{title}</span>}
      <Undraggable className="item-add item-button" onClick={toggleNewItemForm}>
        +
      </Undraggable>

      <Undraggable
        className="item-remove item-button"
        onClick={handleGroupDelete}
      >
        &times;
      </Undraggable>

      {(items.length || showNewItemForm) && (
        <div className="group-items">
          <Undraggable>
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
          </Undraggable>
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

export default React.memo(GroupComponent);
