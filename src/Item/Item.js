export default class Item {
  constructor({
    title = "",
    position = null,
    timeStamp = Date.now(),
    items,
  } = {}) {
    this.title = title;
    this.position = position;
    this.timeStamp = timeStamp;
    this.items = items;
  }
}
