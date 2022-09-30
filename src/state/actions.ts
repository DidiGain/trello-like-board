export type Action =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: { taskTitle: string; listId: string };
    };

export const addList = (cardTitle: string): Action => ({
  type: 'ADD_LIST',
  payload: cardTitle,
});

export const addTask = (taskTitle: string, listId: string): Action => ({
  type: 'ADD_TASK',
  payload: { taskTitle, listId },
});
