import { useDrag } from 'react-dnd';
import { DragItem } from '../components/DragItem';
import { setDraggedItem } from '../state/actions';
import { useAppState } from '../state/AppStateContext';

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: (item, monitor) => {
      monitor.getDropResult();
      dispatch(setDraggedItem(item));
    },
  });
  return { drag };
};
