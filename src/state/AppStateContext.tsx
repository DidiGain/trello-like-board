import { createContext, FC, ReactNode, useContext } from 'react';

export type Task = {
  id: string;
  title: string;
};

export type List = {
  id: string;
  cardTitle: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

const appData: AppState = {
  lists: [
    {
      id: '0',
      cardTitle: 'To Do',
      tasks: [
        { id: 'c00', title: 'Continue the trello app' },
        { id: 'c01', title: 'Review the function qs' },
      ],
    },
    {
      id: '1',
      cardTitle: 'In Progress',
      tasks: [{ id: 'c10', title: 'Follow the Next.js course' }],
    },
    {
      id: '2',
      cardTitle: 'Done',
      tasks: [{ id: 'c20', title: 'Read the current book for 20min' }],
    },
  ],
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
};

type AppContextProps = {
  children?: ReactNode;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC<AppContextProps> = ({ children }) => {
  const { lists } = appData;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
