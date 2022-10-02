import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { DragItem } from '../components/DragItem';
import { Action } from './actions';
import { AppState, appStateReducer, List, Task } from './appStateReducer';

const appData: AppState = {
  lists: [
    {
      id: '0',
      cardTitle: 'To Do',
      tasks: [
        { id: 'c00', taskTitle: 'Continue the trello app' },
        { id: 'c01', taskTitle: 'Review the function qs' },
      ],
    },
    {
      id: '1',
      cardTitle: 'In Progress',
      tasks: [{ id: 'c10', taskTitle: 'Follow the Next.js course' }],
    },
    {
      id: '2',
      cardTitle: 'Done',
      tasks: [{ id: 'c20', taskTitle: 'Read the current book for 20min' }],
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
  const [state, dispatch] = useReducer(appStateReducer, appData);
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
