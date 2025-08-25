import React from 'react';
import {CssBaseline,ThemeProvider,Container,createTheme} from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import Routes from './components/Routes';

const darkTheme = createTheme(
  {
    palette:{
      mode: 'dark'
    }
  }
);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Container>
        <RouterProvider router={Routes}/>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
