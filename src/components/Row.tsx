import { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { ItemDelete, RowContainer, RowTitle } from '../styles';
import { useItemDrag } from '../utils/useItemDrag';
import { throttle } from 'throttle-debounce-ts';
import { moveTask, setDraggedItem } from '../state/actions';
import { isHidden } from '../utils/isHidden';
import { useItemDelete } from '../utils/useItemDelete';

type RowProps = {
  id: string;
  cardId: string;
  title: string;
  isPreview?: boolean;
};

export const Row = ({ id, title, cardId, isPreview }: RowProps) => {
  const { showBtn, onItemHover, onItemLeave, onItemDelete } = useItemDelete();
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({
    type: 'ROW',
    id,
    title,
    cardId,
  });

  const [, drop] = useDrop({
    accept: 'ROW',
    hover: throttle(200, () => {
      if (!draggedItem) return;
      if (draggedItem.type !== 'ROW') return;
      if (draggedItem.id === id) return;

      dispatch(moveTask(draggedItem.id, id, draggedItem.cardId, cardId));
      dispatch(setDraggedItem({ ...draggedItem, cardId }));
    }),
  });

  drag(drop(ref));

  return (
    <RowContainer
      key={id}
      ref={ref}
      isHidden={isHidden(draggedItem, 'ROW', id, isPreview)}
      isPreview={isPreview}
    >
      <ItemDelete
        isHovered={showBtn}
        isSmall={true}
        onMouseEnter={onItemHover}
        onMouseLeave={onItemLeave}
        onMouseDown={() => onItemDelete(id, 'ROW', cardId)}
      />
      <RowTitle>
        {/* <RowTitle onMouseEnter={onItemHover} onMouseLeave={onItemLeave}> */}
        {title}
      </RowTitle>
    </RowContainer>
  );
};
