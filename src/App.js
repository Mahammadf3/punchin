
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {createContext,useState} from "react"
import AdditionalData from "./components/additionalData"


import Home from "./components/Home"

import Punchin from "./components/punchin"
import PunchOut from "./components/punchOut";


export  const GlobalInfo=createContext()
function App() {
  const[digits,setCount]=useState(new Date().toLocaleString())
  



  
  return (
<GlobalInfo.Provider value={{value:digits}}>
<Router>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/punch-In" element={<Punchin/>}/>
    <Route exact path="/punchOut" element={<PunchOut/>}/>
    <Route exact path="/taskCompletd" element={< AdditionalData/>}/>
  </Routes>
</Router>
</GlobalInfo.Provider>

  );
}

export default App;
