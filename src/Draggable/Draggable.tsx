import { Component, createRef, MouseEventHandler } from "react";
import Position, { getOffset } from "../Position";

interface Props {
  onDragEnd: (pos: Position) => void;
  position?: Position;
}

class Draggable extends Component<Props> {
  ref = createRef<HTMLDivElement>();

  state: {
    dragPosition?: Position
  } = {
    dragPosition: undefined
  };

  dragStartOffset = {
    x: 0,
    y: 0
  }

  isValidDragTarget = (target: any) => {
    const isChildOfGroupItems = !!target.closest(".undraggable");
    return !isChildOfGroupItems;
  };

  handleItemDragStart: MouseEventHandler = (event) => {
    if (!this.isValidDragTarget(event.target)) return;

    const pointerPosition = { x: event.pageX, y: event.pageY };
    const elementPosition = getOffset(event.currentTarget);
    this.dragStartOffset = {
      x: pointerPosition.x - elementPosition.x,
      y: pointerPosition.y - elementPosition.y,
    };

    document.addEventListener("mousemove", this.handleItemDrag);
  };

  handleItemDrag = (event: MouseEvent) => {
    const newPosition = new Position({
      x: event.pageX - this.dragStartOffset.x,
      y: event.pageY - this.dragStartOffset.y,
    });

    this.setState({
      dragPosition: newPosition,
    });
  };

  handleItemDragEnd = () => {
    document.removeEventListener("mousemove", this.handleItemDrag);

    if (this.state.dragPosition) {
      this.props.onDragEnd({ ...this.state.dragPosition });
      this.setState({ dragPosition: null });
    }
  };

  getStyle(p?: Position) {
    return {
      left: p?.x,
      top: p?.y,
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
