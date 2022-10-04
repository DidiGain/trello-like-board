import { useDragLayer } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { CustomDragLayerContainer, DragPreviewWrapper } from '../styles';
import { Card } from './Card';
import { Row } from './Row';

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === 'CARD' ? (
          <Card id={draggedItem.id} title={draggedItem.title} isPreview />
        ) : (
          <Row
            id={draggedItem.id}
            title={draggedItem.title}
            cardId={draggedItem.cardId}
            isPreview
          />
        )}
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
