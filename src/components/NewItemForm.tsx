import { useState } from 'react';
import { NewItemButton, NewItemFormContainer, NewItemInput } from '../styles';
import { useFocus } from '../utils/useFocus';

type NewItemFormProps = {
  onAdd(text: string): void;
  onMouseLeave: () => void;
};

export const NewItemForm = ({ onAdd, onMouseLeave }: NewItemFormProps) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  const handleAddedText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onAdd(text);
  };

  return (
    <NewItemFormContainer onMouseLeave={onMouseLeave}>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleAddedText}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
