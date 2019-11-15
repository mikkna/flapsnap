import React from "react";
import Types from "prop-types";
import classnames from "classnames";

const Undraggable = ({ children, className, ...rest }) => (
  <div className={classnames("undraggable", className)} {...rest}>
    {children}
  </div>
);

Undraggable.propTypes = {
  children: Types.node.isRequired,
  className: Types.string
};

Undraggable.defaultProps = {
  className: ""
};

export default Undraggable;
