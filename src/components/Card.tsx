import { useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { throttle } from 'throttle-debounce-ts';
import {
  addTask,
  deleteCard,
  moveList,
  moveTask,
  setDraggedItem,
} from '../state/actions';
import { useAppState } from '../state/AppStateContext';
import { CardContainer, CardDelete, CardTitle } from '../styles';
import { isHidden } from '../utils/isHidden';
import { useItemDrag } from '../utils/useItemDrag';
import { AddNewItem } from './AddNewItem';
import { Row } from './Row';

type CardProps = {
  id: string;
  title: string;
  isPreview?: boolean;
};

export const Card = ({ id, title, isPreview }: CardProps) => {
  const [showBtn, setShowBtn] = useState(false);
  const { getTasksByListId, draggedItem, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({ type: 'CARD', id, title });

  const [, drop] = useDrop({
    accept: ['CARD', 'ROW'],
    hover: throttle(200, () => {
      if (!draggedItem) return;
      if (draggedItem.type === 'CARD') {
        if (draggedItem.id === id) return;
        dispatch(moveList(draggedItem.id, id));
      } else {
        if (draggedItem.cardId === id) return;
        if (tasks.length) return;
        dispatch(moveTask(draggedItem.id, null, draggedItem.cardId, id));
        dispatch(setDraggedItem({ ...draggedItem, cardId: id }));
      }
    }),
  });

  drag(drop(ref));

  const onCardHover = () => {
    setShowBtn(true);
  };

  const onCardLeave = () => {
    setShowBtn(false);
  };

  const onCardDelete = () => {
    dispatch(deleteCard(id));
  };

  return (
    <CardContainer
      ref={ref}
      isHidden={isHidden(draggedItem, 'CARD', id, isPreview)}
      isPreview={isPreview}
    >
      <CardDelete
        isHovered={showBtn}
        onMouseEnter={onCardHover}
        onMouseLeave={onCardLeave}
        onMouseDown={onCardDelete}
      />
      <CardTitle onMouseEnter={onCardHover} onMouseLeave={onCardLeave}>
        {title}
      </CardTitle>
      {tasks.map((task) => (
        <Row key={task.id} id={task.id} title={task.taskTitle} cardId={id} />
      ))}
      <AddNewItem
        buttonTitle="+ Add new task"
        newCard={false}
        onAdd={(text) => dispatch(addTask(text, id))}
      />
    </CardContainer>
  );
};
