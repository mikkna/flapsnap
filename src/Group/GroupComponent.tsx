import React, { useState } from "react";
import Item from "../Item";
import { ItemComponent, NewItemForm } from "../Item";
import { ReactSortable as Sortable } from "react-sortablejs";
import classnames from "classnames";
import { Undraggable } from "../Draggable";
import { getCopiedText, copyToClipboard } from "./utils";
import Position from "../Position";

interface Props {
  position?: Position;
  title: string;
  items: Item[];
  timeStamp?: number;
  onChange: (item: Item) => void;
  onRemove: () => void;
}

const GroupComponent: React.FC<Props> = ({
  position,
  title,
  items,
  timeStamp,
  onChange,
  onRemove,
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

  function toggleNewItemForm() {
    setShowNewItemForm(!showNewItemForm);
  }

  function handleItemCreate(item: Item) {
    const editedGroup = cloneItem({ items: [...items, item] });
    onChange(editedGroup);
  }

  function handleItemRemove(item: Item) {
    const filteredItems = items.filter((i) => i.timeStamp !== item.timeStamp);

    const editedGroup = cloneItem({ items: filteredItems });
    onChange(editedGroup);
    setShowNewItemForm(false);
  }

  function handleItemOrderChange(reorderedItems: Item[]) {
    const editedGroup = cloneItem({ items: reorderedItems });
    onChange(editedGroup);
  }

  function handleCopy() {
    copyToClipboard(getCopiedText({ title, items }));
  }

  function mapItem(item: Item) {
    return (
      <ItemComponent
        key={item.timeStamp}
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
      ...params,
    });
  }

  function getStyle() {
    return {
      transform: deleted ? "scale(0.7)" : "",
    };
  }

  return (
    <div
      className={classnames("item group", {
        "item--collapse": deleted,
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
            <Sortable list={items} tag="ul" setList={handleItemOrderChange}>
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
      {!!items.length && (
        <Undraggable onClick={handleCopy} className="item-copy">
          <button>copy</button>
        </Undraggable>
      )}
    </div>
  );
};


export default React.memo(GroupComponent);
