import Appbar from './Appbar'
import { ThemeProvider } from '@mui/material/styles';
import CategoryContainer from './CategoryContainer';
import { createTheme } from '@mui/material/styles';
import { connect } from 'react-redux'

const App = ({colorMode}) =>  {

  const appTheme = createTheme({
    palette: {
      mode: colorMode.darkMode ? 'dark' : 'light'
    },
  });

  return (
    <ThemeProvider theme={appTheme}>
      <Appbar/>
      <CategoryContainer/>
    </ThemeProvider>
    
  );
}

const mapStateToProps = (state) => ({
    colorMode : state.colorMode
})

export default connect(mapStateToProps,null)(App)