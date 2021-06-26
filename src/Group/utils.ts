import Item from "../Item";

export function getCopiedText({ title, items = [] }: {title: string, items?: Item[] }) {
  const itemTitles = items.map(({ title }) => `- ${title}`);

  return [title, ...itemTitles].join("\n");
}

export function copyToClipboard(text: string) {
  const textarea = document.createElement("textarea");
  // @ts-ignore
  textarea.style = {
    position: "absolute",
    top: "-1000px",
  };
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
