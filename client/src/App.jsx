import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import GsapTransition from "./components/GsapTransition"
import {Provider} from "react-redux"
import store from "../store/slices/store"


function App() {
  return (
    <>
     <Provider store={store}>
    <BrowserRouter>
    <NavBar/>
    <GsapTransition/>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
