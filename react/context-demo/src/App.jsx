import { use, useState } from "react";
import Page from './components/Page';
import "./App.css";
import { ThemeContext } from "./ThemeContext";

function App() {
    const [theme,setTheme] = useState('light');
    console.log(ThemeContext,'/////');
  return (
   <ThemeContext.Provider value={theme}>
     <Page />
     <button onClick={() => setTheme('dark')}>切换</button>
     {/* <Uncle /> */}
   {/* <Parent>
    <Child>
        <GrandChild>
            <GreatGrandChild></GreatGrandChild>
        </GrandChild>
    </Child>
   </Parent> */}
   </ThemeContext.Provider>
 )
}

export default App;
