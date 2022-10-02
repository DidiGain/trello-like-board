import { DragItem } from '../components/DragItem';

export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string
): boolean => {
  return (draggedItem &&
    draggedItem.id === id &&
    draggedItem.type === itemType) as boolean;
};
