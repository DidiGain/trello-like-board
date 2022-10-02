import { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { throttle } from 'throttle-debounce-ts';
import { addTask, moveList } from '../state/actions';
import { useAppState } from '../state/AppStateContext';
import { CardContainer, CardTitle } from '../styles';
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
  const { getTasksByListId, draggedItem, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({ type: 'CARD', id, title });

  const [, drop] = useDrop({
    accept: 'CARD',
    hover: throttle(200, () => {
      if (!draggedItem) return;
      if (draggedItem.type === 'CARD') {
        if (draggedItem.id === id) return;
        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });

  drag(drop(ref));

  return (
    <CardContainer
      ref={ref}
      isHidden={isHidden(draggedItem, 'CARD', id, isPreview)}
      isPreview={isPreview}
    >
      <CardTitle>{title}</CardTitle>
      {tasks.map((task) => (
        <Row key={task.id} id={task.id} title={task.taskTitle}></Row>
      ))}
      <AddNewItem
        buttonTitle="+ Add new task"
        newCard={false}
        onAdd={(text) => dispatch(addTask(text, id))}
      />
    </CardContainer>
  );
};
