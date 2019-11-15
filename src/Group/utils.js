export function getCopiedText({ title, items = [] }) {
  const itemTitles = items.map(({ title }) => `- ${title}`);

  return [title, ...itemTitles].join('\n');
}

export function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.style = {
    position: 'absolute',
    top: '-1000px',
  }
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}