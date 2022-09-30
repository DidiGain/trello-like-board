import { ThemeProvider } from 'styled-components';
import { Card } from './components/Card';
import { AppContainer } from './styles';
import GlobalStyles from './shared/theme';
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';

export const theme = {
  colors: {
    appContainer: 'rgb(171,204,186)',
    cardContainer: 'rgb(234,214,166)',
    addItem: 'rgba(140,128,99, .9)',
  },
};

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppContainer>
          {lists.map((list) => (
            <Card key={list.id} id={list.id} title={list.cardTitle}></Card>
          ))}
          <AddNewItem
            buttonTitle="+ Add new card"
            newCard={true}
            onAdd={(text) => dispatch(addList(text))}
          />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
