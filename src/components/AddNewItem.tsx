import { useState } from 'react';
import { AddItemButton } from '../styles';
import { NewItemForm } from './NewItemForm';

type AddNemItemProps = {
  buttonTitle: string;
  newCard: boolean;
  onAdd(text: string): void;
};

export const AddNewItem = ({
  buttonTitle,
  newCard,
  onAdd,
}: AddNemItemProps) => {
  const [showAddForm, setShowAddForm] = useState(false);

  if (showAddForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowAddForm(false);
        }}
        onMouseLeave={() => setShowAddForm(false)}
      />
    );
  }

  return (
    <AddItemButton newCard={newCard} onClick={() => setShowAddForm(true)}>
      {buttonTitle}
    </AddItemButton>
  );
};
