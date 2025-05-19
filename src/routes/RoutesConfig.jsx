import React from "react";

//Pages
import Home from "../pages/Home";
import Plans from "../pages/Plans";
import Summary from "../pages/Summary";
import NotFound from "../pages/404";

//Routing
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const RoutesConfig = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/planes" element={<Plans/>}/>
      <Route path="/resumen" element={<Summary/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default RoutesConfig