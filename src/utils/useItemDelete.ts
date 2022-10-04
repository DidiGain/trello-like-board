import { useState } from 'react';
import { deleteItem } from '../state/actions';
import { useAppState } from '../state/AppStateContext';

export const useItemDelete = () => {
  const [showBtn, setShowBtn] = useState(false);
  const { dispatch } = useAppState();

  const onItemHover = () => {
    setShowBtn(true);
  };

  const onItemLeave = () => {
    setShowBtn(false);
  };

  const onItemDelete = (id: string, itemType: string, cardId: string) => {
    dispatch(deleteItem(id, itemType, cardId));
  };

  return { showBtn, onItemHover, onItemLeave, onItemDelete };
};
