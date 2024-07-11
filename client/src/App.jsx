import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import GsapTransition from "./components/GsapTransition"


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <GsapTransition/>
    </BrowserRouter>
    </>
  )
}

export default App
