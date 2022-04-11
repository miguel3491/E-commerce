import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';


function Header(){

    const theme = createTheme({
        palette: {
            primary: {
              main: '#000',
            },
            secondary: {
              main: '#000',
            },
          },
    });

return(
     <div>
        <div id = "header">
            <div className="Tittle-page">
            <h2>Find your style</h2>
            <ThemeProvider theme = {theme}>
            <LoadingButton 
            href = "/content"
            variant="contained" 
            color = "secondary"
            size = "large">Shop Now</LoadingButton>
            </ThemeProvider>
            </div>
        </div>                     
    </div>

    )
}

export default Header;

// React Router: https://v5.reactrouter.com/web/example/basic
// custom-link: https://v5.reactrouter.com/web/example/custom-link  !Read Tomorrow to solve the same content between "/" and "/content"