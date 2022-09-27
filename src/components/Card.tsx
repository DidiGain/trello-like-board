import { CardContainer, CardTitle } from '../styles';
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
    </CardContainer>
  );
};
