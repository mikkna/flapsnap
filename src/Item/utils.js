import isUrl from "is-url";

export function isLink(str) {
  return isUrl(str);
}

export function getStyleObject(position) {
  if (!position) return {};

  return { left: position.x, top: position.y };
}
