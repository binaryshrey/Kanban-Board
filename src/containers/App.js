import Appbar from './Appbar'
import { ThemeProvider } from '@mui/material/styles';
import CategoryContainer from './CategoryContainer';
import { createTheme } from '@mui/material/styles';
import { connect } from 'react-redux'

const App = ({colorMode}) =>  {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: "#F4F8FC"
      },
    },
  });

  return (
    <ThemeProvider theme={colorMode.darkMode ? darkTheme : lightTheme}>
      <Appbar/>
      <CategoryContainer/>
    </ThemeProvider>
    
  );
}

const mapStateToProps = (state) => ({
    colorMode : state.colorMode
})

export default connect(mapStateToProps,null)(App)