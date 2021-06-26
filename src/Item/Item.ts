import Position from "../Position";

interface ConstructorProps {
  title: string;
  position?: Position;
  timeStamp?: number;
  items?: Item[]
}

export default class Item {
  id: number;
  title: string;
  position?: Position;
  timeStamp: number;
  items: Item[]

  constructor({
    title = "",
    position,
    timeStamp = Date.now(),
    items = [],
  }: ConstructorProps) {
    this.id = timeStamp;
    this.title = title;
    this.position = position;
    this.timeStamp = timeStamp;
    this.items = items;
  }
}
