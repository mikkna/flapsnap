import React, { useState } from "react";
import { isLink } from "./utils";
import classnames from "classnames";

interface Props {
  title: string;
  onClick: () => void;
}

const ItemComponent: React.FC<Props> = ({ title, onClick, ...otherProps }) => {
  const [deleted, setDeleted] = useState(false);

  function handleClick() {
    setDeleted(true);

    setTimeout(() => {
      onClick();
    }, 200);
  }

  function parseTitle() {
    let urlSliceRegex = /(https?:\/\/)?(www\.)?/;
    if (isLink(title)) {
      return title.replace(urlSliceRegex, "");
    }
    return title;
  }

  return (
    <li
      {...otherProps}
      onClick={handleClick}
      className={classnames("item ", {
        "item--collapse": deleted,
      })}
    >
      <span className="item-content item-content-block" title={title}>
        {isLink(title) ? (
          <a
            href={title}
            rel="noreferrer noopener"
            target="_blank"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {parseTitle()}
          </a>
        ) : (
          title
        )}
      </span>
    </li>
  );
};

export default ItemComponent;
