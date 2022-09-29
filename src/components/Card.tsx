import { CardContainer, CardTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Row } from './Row';

type CardProps = {
  id?: string;
  title: string;
};

export const Card = ({ title }: CardProps) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <Row title="make a resume"></Row>
      <AddNewItem
        buttonTitle="+ Add new task"
        newCard={false}
        onAdd={(text) => console.log('card')}
      />
    </CardContainer>
  );
};
