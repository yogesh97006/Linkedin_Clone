import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
// import ErrorPage from "../error-page";

function lr(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' elements={< Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default lr