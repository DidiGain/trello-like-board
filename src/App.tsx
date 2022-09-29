import { ThemeProvider } from 'styled-components';
import { Card } from './components/Card';
import { AppContainer } from './styles';
import GlobalStyles from './shared/theme';
import { AddNewItem } from './components/AddNewItem';

export const theme = {
  colors: {
    appContainer: 'rgb(171,204,186)',
    cardContainer: 'rgb(234,214,166)',
    addItem: 'rgba(140,128,99, .9)',
  },
};

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Card title="card"></Card>
          <AddNewItem buttonTitle="+ Add new card" newCard={true} />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
