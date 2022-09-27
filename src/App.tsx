import { ThemeProvider } from 'styled-components';
import { Card } from './components/Card';
import { AppContainer } from './styles';
import GlobalStyles from './shared/theme';

export const theme = {
  colors: {
    appContainer: 'rgb(171,204,186)',
    cardContainer: 'rgb(234,214,166)',
  },
};

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Card title="card"></Card>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
