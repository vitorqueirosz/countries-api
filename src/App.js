import React, { useState} from 'react';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
// import light from './styles/themes/light';
import * as themes from './styles/themes';
import GlobalStyles from './styles/global';
import ThemeContext from './styles/Context/context';
import Main from './components/Main';
// import Details from './components/Details';

function App({props}) {

    const [theme, setTheme] = useState(themes.dark);

    function changeTheme(){
        setTheme(theme === themes.dark ? themes.light : themes.dark);

        console.log(setTheme);
    }
    return (
        <>
        <ThemeContext.Provider value={theme}>
            <ThemeContext.Consumer>

        {theme => (
            <>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
            <GlobalStyles />

                <Main changeTheme={changeTheme}/>

            </ThemeProvider>
            </>
        )}

         </ThemeContext.Consumer>
         </ThemeContext.Provider>
        </>

    );
}

export default App;
