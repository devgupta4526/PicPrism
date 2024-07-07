import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import SellerDashBoard from "./pages/SellerDashBoard"
import BuyerDashBoard from "./pages/BuyerDashBoard"
import NavBar from "./components/NavBar"


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/signup" element= {<SignUp/>}/>
      <Route path="/seller/profile" element= {<SellerDashBoard/>}/>
      <Route path="/buyer/profile" element= {<BuyerDashBoard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
