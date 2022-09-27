import { RowContainer } from '../styles';

type RowProps = {
  title: string;
};

export const Row = ({ title }: RowProps) => {
  return <RowContainer>{title}</RowContainer>;
};
