import { useDragLayer } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { CustomDragLayerContainer } from '../styles';
import { Card } from './Card';

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <Card id={draggedItem.id} title={draggedItem.title} />
    </CustomDragLayerContainer>
  ) : null;
};
