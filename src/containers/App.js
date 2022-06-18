import Appbar from './Drawer/Appbar'
import appTheme from './Theme/AppTheme';
import { ThemeProvider } from '@mui/material/styles';

const App = () =>  {
  return (
    <ThemeProvider theme={appTheme}>
      <Appbar/>
    </ThemeProvider>
    
  );
}

export default App;
