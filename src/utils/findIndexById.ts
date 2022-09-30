type Item = {
  id: string;
};

export const findIndexById = <TItem extends Item>(
  id: string,
  items: TItem[]
) => {
  return items.findIndex((item: TItem) => item.id === id);
};
