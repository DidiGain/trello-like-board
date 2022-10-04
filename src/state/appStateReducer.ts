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

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case 'ADD_LIST': {
      // return {
      //   ...draft,
      //   lists: [
      //     ...draft.lists,
      //     {
      //       id: nanoid(),
      //       cardTitle: action.payload,
      //       tasks: [],
      //     },
      //   ],
      // };

      draft.lists.push({
        id: nanoid(),
        cardTitle: action.payload,
        tasks: [],
      });
      break;
    }
    case 'ADD_TASK': {
      const { taskTitle, listId } = action.payload;
      const targetListIndex = findIndexById(listId, draft.lists);

      // const updatedList = draft.lists.map((list, i) => {
      //   return {
      //     ...list,
      //     tasks:
      //       i === targetListIndex
      //         ? [
      //             ...list.tasks,
      //             {
      //               id: nanoid(),
      //               taskTitle,
      //             },
      //           ]
      //         : list.tasks,
      //   };
      // });

      // return {
      //   ...draft,
      //   lists: updatedList,
      // };

      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        taskTitle,
      });
      break;
    }
    case 'MOVE_LIST': {
      const { draggedId, hoveredId } = action.payload;
      const dragIndex = findIndexById(draggedId, draft.lists);
      const hoverIndex = findIndexById(hoveredId, draft.lists);
      const updatedList = moveItem(dragIndex, hoverIndex, draft.lists);
      // draft.lists = moveItem(dragIndex, hoverIndex, draft.lists)
      // break

      return {
        ...draft,
        lists: updatedList,
      };
    }
    case 'SET_DRAGGED_ITEM': {
      // draft.draggedItem = action.payload
      // break
      return {
        ...draft,
        draggedItem: action.payload,
      };
    }
    case 'MOVE_TASK': {
      const { draggedRowId, hoveredRowId, sourceCardId, hoveredCardId } =
        action.payload;

      const sourceCardIndex = findIndexById(sourceCardId, draft.lists);
      const hoveredCardIndex = findIndexById(hoveredCardId, draft.lists);

      const draggedRowIndex = findIndexById(
        draggedRowId,
        draft.lists[sourceCardIndex].tasks
      );
      const hoveredRowIndex = hoveredRowId
        ? findIndexById(hoveredRowId, draft.lists[hoveredCardIndex].tasks)
        : 0;

      const item = draft.lists[sourceCardIndex].tasks[draggedRowIndex];

      draft.lists[sourceCardIndex].tasks.splice(draggedRowIndex, 1);
      draft.lists[hoveredCardIndex].tasks.splice(hoveredRowIndex, 0, item);
      break;
    }

    case 'DELETE_ITEM': {
      const { itemId, itemType, cardId } = action.payload;

      if (itemType === 'CARD') {
        const cardToDelete = findIndexById(itemId, draft.lists);
        draft.lists.splice(cardToDelete, 1);
      }
      if (itemType === 'ROW') {
        const cardIndex = findIndexById(cardId, draft.lists);
        const cardArr = draft.lists[cardIndex].tasks;
        const taskToDelete = findIndexById(itemId, cardArr);
        draft.lists[cardIndex].tasks.splice(taskToDelete, 1);
      }

      break;
    }
    default:
      return draft;
  }
};
