import styled from 'styled-components';

type AddItemButtonProps = {
  newCard?: boolean;
};

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  padding: 15px;
  background-color: ${(p) => p.theme.colors.appContainer};
`;

export const CardContainer = styled.div`
  width: 250px;
  min-height: 40px;
  margin-right: 20px;
  padding: 8px 8px;
  border-radius: 4px;
  background-color: ${(p) => p.theme.colors.cardContainer};
`;

export const RowContainer = styled.div`
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
  padding: 6px 16px 12px;
  font-weight: bold;
  text-transform: capitalize;
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