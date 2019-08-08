import React, { useState } from "react";
import Types from "prop-types";
import { isLink } from "./utils";

const ItemComponent = ({ title, onClick, ...otherProps }) => {
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
      let parsedTitle = title.replace(urlSliceRegex, "");
      if (parsedTitle.length > 43) {
        return parsedTitle.slice(0, 40) + "...";
      }
      return parsedTitle;
    }
    return title;
  }

  return (
    <li
      {...otherProps}
      onClick={handleClick}
      className={"item" + (deleted ? " item--collapse " : "")}
    >
      <span className="item-content">
        {isLink(title) ? (
          <a
            href={title}
            rel="noreferrer noopener"
            target="_blank"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {parseTitle()}
          </a>
        ) : (
          parseTitle()
        )}
      </span>
    </li>
  );
};

ItemComponent.propTypes = {
  title: Types.string.isRequired,
  onClick: Types.func
};

ItemComponent.defaultProps = {
  onClick: () => {}
};

export default ItemComponent;
