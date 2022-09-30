import { nanoid } from 'nanoid';
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
            cardTitle: action.payload as string,
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
    default:
      return state;
  }
};
