import { useState } from 'react';
import { AddItemButton } from '../styles';

type AddNemItemProps = {
  buttonTitle: string;
  newCard: boolean;
};

export const AddNewItem = ({ buttonTitle, newCard }: AddNemItemProps) => {
  return <AddItemButton newCard={newCard}>{buttonTitle}</AddItemButton>;
};
