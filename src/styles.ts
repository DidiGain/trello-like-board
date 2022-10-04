import styled from 'styled-components';

type AddItemButtonProps = {
  newCard?: boolean;
};

interface DraggedContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

type DragPreviewWrapperProps = {
  position: {
    x: number;
    y: number;
  };
};

interface DeleteButton {
  isHovered: boolean;
  isSmall?: boolean;
}

export const DraggedContainer = styled.div<DraggedContainerProps>`
  opacity: ${(p) => (p.isHidden ? 0 : 1)};
  transform: ${(p) => (p.isPreview ? 'rotate(5deg)' : undefined)};
`;

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  padding: 15px;
  background-color: ${(p) => p.theme.colors.appContainer};
`;

export const CardContainer = styled(DraggedContainer)`
  position: relative;
  width: 250px;
  min-height: 40px;
  margin-right: 20px;
  padding: 0px 8px;
  padding-bottom: 10px;
  border-radius: 4px;
  background-color: ${(p) => p.theme.colors.cardContainer};
`;

export const ItemDelete = styled.button<DeleteButton>`
  position: absolute;
  top: ${(p) => (p.isSmall ? '-4px' : '-10px')};
  right: ${(p) => (p.isSmall ? '-1px' : '-4px')};
  width: ${(p) => (p.isSmall ? '20px' : '30px')};
  height: ${(p) => (p.isSmall ? '18px' : '30px')};

  background-color: ${(p) => p.theme.colors.appContainer};
  background-color: orange;
  border: ${(p) => (p.isSmall ? 'none' : 'solid 2px grey')};
  border-radius: ${(p) => (p.isSmall ? '50%' : '0')};
  opacity: ${(p) => (p.isHovered ? 1 : 0)};
  /* opacity: 1; */

  &::before,
  &::after {
    position: absolute;
    content: '';
    top: ${(p) => (p.isSmall ? '3px' : '3px')};
    right: ${(p) => (p.isSmall ? '9px' : '13px')};
    width: 2px;
    height: ${(p) => (p.isSmall ? '12px' : '20px')};
    background-color: grey;
    opacity: ${(p) => (p.isHovered ? 1 : 0)};
    /* opacity: 1; */
  }

  &::before {
    transform: rotate(-45deg);
  }

  &::after {
    transform: rotate(45deg);
  }
`;

export const RowContainer = styled(DraggedContainer)`
  position: relative;
  max-width: 250px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 300;
  background-color: #eee;
  box-shadow: #091e4240 0px 1px 0px 0px;
  cursor: pointer;
`;

export const CardTitle = styled.div`
  padding: 10px 16px 16px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const RowTitle = styled.p`
  padding: 5px;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  max-width: 250px;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
  text-align: left;
  background-color: #ffffff3d;
  color: ${(p) => (p.newCard ? '#000c' : p.theme.colors.addItem)};
  &:hover {
    background-color: ${(p) =>
      p.newCard ? p.theme.colors.cardContainer : '#eee'};
  }
`;

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 250px;
  width: 100%;
`;

export const NewItemButton = styled.div`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  box-shadow: none;
  text-align: center;
  background-color: #61c87b;
  color: #fff;
  cursor: pointer;
`;

export const NewItemInput = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const CustomDragLayerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
`;

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
  ({ position: { x, y } }) => ({
    style: {
      transform: `translate(${x}px, ${y}px)`,
    },
  })
)<DragPreviewWrapperProps>``;
