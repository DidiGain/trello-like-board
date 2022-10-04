export type CardDragItem = {
  id: string;
  title: string;
  type: 'CARD';
};

export type RowDragItem = {
  id: string;
  cardId: string;
  title: string;
  type: 'ROW';
};

export type DragItem = CardDragItem | RowDragItem;
