import { DragItem } from '../components/DragItem';

export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean
): boolean => {
  return (!isPreview &&
    draggedItem &&
    draggedItem.id === id &&
    draggedItem.type === itemType) as boolean;
};
