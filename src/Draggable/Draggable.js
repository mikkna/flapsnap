import React, { Component, createRef } from "react";
import Types from "prop-types";
import Position, { getOffset } from "../Position";

class Draggable extends Component {
  static propTypes = {
    children: Types.node.isRequired,
    onDragEnd: Types.func.isRequired,
    position: Types.shape({
      x: Types.number.isRequired,
      y: Types.number.isRequired
    }).isRequired
  };

  ref = createRef();

  state = {
    dragPosition: null,
  };

  dragStartOffset = null;

  isValidDragTarget = target => {
    const isChildOfGroupItems = !!target.closest(".undraggable");
    return !isChildOfGroupItems;
  };

  handleItemDragStart = event => {
    if (!this.isValidDragTarget(event.target)) return;

    const pointerPosition = { x: event.pageX, y: event.pageY };
    const elementPosition = getOffset(event.currentTarget);
    this.dragStartOffset = {
      x: pointerPosition.x - elementPosition.x,
      y: pointerPosition.y - elementPosition.y
    };

    document.addEventListener("mousemove", this.handleItemDrag);
  };

  handleItemDrag = event => {
    const newPosition = new Position({
      x: event.pageX - this.dragStartOffset.x,
      y: event.pageY - this.dragStartOffset.y
    });

    this.setState({
      dragPosition: newPosition
    });
  };

  handleItemDragEnd = () => {
    document.removeEventListener("mousemove", this.handleItemDrag);

    if (this.state.dragPosition) {
      this.props.onDragEnd({ ...this.state.dragPosition });
      this.setState({ dragPosition: null });
    }
  };

  getStyle(position) {
    return {
      left: position.x,
      top: position.y
    };
  }

  render() {
    return (
      <div
        className="draggable item--absolute"
        ref={this.ref}
        onMouseDown={this.handleItemDragStart}
        onMouseUp={this.handleItemDragEnd}
        style={this.getStyle(this.state.dragPosition || this.props.position)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;
