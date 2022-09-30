import { addTask } from '../state/actions';
import { useAppState } from '../state/AppStateContext';
import { CardContainer, CardTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Row } from './Row';

type CardProps = {
  id: string;
  title: string;
};

export const Card = ({ id, title }: CardProps) => {
  const { getTasksByListId, dispatch } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <CardContainer>
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
