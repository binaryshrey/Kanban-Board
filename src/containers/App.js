import Appbar from './Appbar'
import appTheme from './AppTheme';
import { ThemeProvider } from '@mui/material/styles';
import CategoryContainer from './CategoryContainer';

const App = () =>  {
  return (
    <ThemeProvider theme={appTheme}>
      <Appbar/>
      <CategoryContainer/>
    </ThemeProvider>
    
  );
}

export default App;
