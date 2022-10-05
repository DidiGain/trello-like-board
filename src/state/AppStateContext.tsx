import { nanoid } from 'nanoid';
import { useImmerReducer } from 'use-immer';
import { createContext, Dispatch, FC, ReactNode, useContext } from 'react';
import { DragItem } from '../components/DragItem';
import { Action } from './actions';
import { AppState, appStateReducer, List, Task } from './appStateReducer';

const appData: AppState = {
  lists: [
    {
      id: nanoid(),
      cardTitle: 'To Do',
      tasks: [
        { id: nanoid(), taskTitle: 'Quizlet - repeat 50 cards' },
        { id: nanoid(), taskTitle: 'Review the q-s in Pages' },
      ],
    },
    {
      id: nanoid(),
      cardTitle: 'In Progress',
      tasks: [
        { id: nanoid(), taskTitle: 'Continue the MVP' },
        { id: nanoid(), taskTitle: 'TS advanced - course' },
      ],
    },
    {
      id: nanoid(),
      cardTitle: 'Done',
      tasks: [
        {
          id: nanoid(),
          taskTitle: 'Read the current book in english',
        },
        { id: nanoid(), taskTitle: 'SQL course' },
      ],
    },
  ],
  draggedItem: null,
};

type AppStateContextProps = {
  lists: List[];
  draggedItem: DragItem | null;
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

type AppContextProps = {
  children?: ReactNode;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC<AppContextProps> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists, draggedItem } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list: List) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider
      value={{ lists, getTasksByListId, dispatch, draggedItem }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
