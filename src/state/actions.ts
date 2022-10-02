import { DragItem } from '../components/DragItem';

export type Action =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: { taskTitle: string; listId: string };
    }
  | {
      type: 'MOVE_LIST';
      payload: {
        draggedId: string;
        hoveredId: string;
      };
    }
  | {
      type: 'SET_DRAGGED_ITEM';
      payload: DragItem | null;
    };

export const addList = (cardTitle: string): Action => ({
  type: 'ADD_LIST',
  payload: cardTitle,
});

export const addTask = (taskTitle: string, listId: string): Action => ({
  type: 'ADD_TASK',
  payload: { taskTitle, listId },
});

export const moveList = (draggedId: string, hoveredId: string): Action => ({
  type: 'MOVE_LIST',
  payload: { draggedId, hoveredId },
});

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: 'SET_DRAGGED_ITEM',
  payload: draggedItem,
});
