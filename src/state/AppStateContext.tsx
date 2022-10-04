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
        { id: nanoid(), taskTitle: 'Continue the trello app - card 1/1' },
        { id: nanoid(), taskTitle: 'Review the function q-s - card 1/2' },
      ],
    },
    {
      id: nanoid(),
      cardTitle: 'In Progress',
      tasks: [
        { id: nanoid(), taskTitle: 'Follow the Next.js course - card 2/1' },
        { id: nanoid(), taskTitle: 'Follow the TS course - card 2/2' },
      ],
    },
    {
      id: nanoid(),
      cardTitle: 'Done',
      tasks: [
        {
          id: nanoid(),
          taskTitle: 'Read the current book for 20min - card 3/1',
        },
        { id: nanoid(), taskTitle: 'SQL course - card 3/2' },
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
