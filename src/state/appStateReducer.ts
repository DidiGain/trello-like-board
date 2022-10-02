import { nanoid } from 'nanoid';
import { DragItem } from '../components/DragItem';
import { moveItem } from '../utils/dragItem';
import { findIndexById } from '../utils/findIndexById';
import { Action } from './actions';

export type Task = {
  id: string;
  taskTitle: string;
};

export type List = {
  id: string;
  cardTitle: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: nanoid(),
            cardTitle: action.payload,
            tasks: [],
          },
        ],
      };
    }
    case 'ADD_TASK': {
      const { taskTitle, listId } = action.payload;
      const targetListIndex = findIndexById(listId, state.lists);

      const updatedList = state.lists.map((list, i) => {
        return {
          ...list,
          tasks:
            i === targetListIndex
              ? [
                  ...list.tasks,
                  {
                    id: nanoid(),
                    taskTitle,
                  },
                ]
              : list.tasks,
        };
      });

      return {
        ...state,
        lists: updatedList,
      };
    }
    case 'MOVE_LIST': {
      const { draggedId, hoveredId } = action.payload;
      const dragIndex = findIndexById(draggedId, state.lists);
      const hoverIndex = findIndexById(hoveredId, state.lists);
      const updatedList = moveItem(dragIndex, hoverIndex, state.lists);

      return {
        ...state,
        lists: updatedList,
      };
    }
    case 'SET_DRAGGED_ITEM': {
      return {
        ...state,
        draggedItem: action.payload,
      };
    }
    default:
      return state;
  }
};
