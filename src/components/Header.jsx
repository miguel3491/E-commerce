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
            <h2>Much Stock, Vast Stow</h2>
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

