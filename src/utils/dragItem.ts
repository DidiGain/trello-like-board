export function removeItemFromIndex<TItem>(index: number, array: TItem[]) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function insertItemAtIndex<TItem>(
  index: number,
  item: TItem,
  array: TItem[]
) {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

export function moveItem<TItem>(from: number, to: number, array: TItem[]) {
  const item = array[from];
  return insertItemAtIndex(to, item, removeItemFromIndex(from, array));
}
