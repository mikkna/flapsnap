import React, { MouseEvent } from "react";
import classnames from "classnames";

interface Props {
  className?: string;
  onClick?:(e: MouseEvent<HTMLDivElement>) => void;
}

const Undraggable: React.FC<Props> = ({ children, className = "", ...rest }) => (
  <div className={classnames("undraggable", className)} {...rest}>
    {children}
  </div>
);

export default Undraggable;
