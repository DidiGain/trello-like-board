import { RowContainer } from '../styles';

type RowProps = {
  id: string;
  title: string;
};

export const Row = ({ title }: RowProps) => {
  return <RowContainer>{title}</RowContainer>;
};
