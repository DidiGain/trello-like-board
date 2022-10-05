import { ThemeProvider } from 'styled-components';
import { Card } from './components/Card';
import { AppContainer } from './styles';
import GlobalStyles from './shared/theme';
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';
import { CustomDragLayer } from './components/CustomDragLayer';
import { Header } from './components/Header';

export const theme = {
  colors: {
    headerContainer: 'rgb(188,141,162)',
    appContainer: 'rgb(141,162,188)',
    cardContainer: 'rgb(223,216,210)',
    addItem: 'rgba(140,128,99, .9)',
  },
};

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <AppContainer>
          <CustomDragLayer />
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
