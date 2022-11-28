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
    headerContainer: 'rgb(230,51,122)',
    headerContainerLight: 'rgb(232,71,135)',
    appContainer: 'rgb(177,203,255)',
    cardContainer: 'rgb(141,162,204)',
    addItem: 'rgba(140,128,99, .9)',
    headerFontColor: '#f7f5f3',
    cardHeaderFontColor: 'rgb(35,40,51)',
    newTaskFontColor: 'rgb(53,60,76)',
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
