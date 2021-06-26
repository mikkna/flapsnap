import isUrl from "is-url";
import Position from "../Position";

export function isLink(str: string) {
  return isUrl(str);
}

export function getStyleObject(position?: Position) {
  if (!position) return {};

  return { left: position.x, top: position.y };
}
