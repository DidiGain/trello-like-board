import { useDragLayer } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { CustomDragLayerContainer, DragPreviewWrapper } from '../styles';
import { Card } from './Card';

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <Card id={draggedItem.id} title={draggedItem.title} isPreview />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
