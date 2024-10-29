import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"


import Login from "../Pages/Login";
import Notfound from "../Pages/Notfound";
import ProductList from "../Pages/ProductList";
import Rejiseration from "../Pages/Rejiseration";

import {api} from "../confing/api";
function Router() {
    const token=api.headers;
    console.log(token);
    
  return (
   <BrowserRouter>
   <Routes>
    <Route  path="/" element={token ? <ProductList/> : <Navigate to="/login"/>} />
<Route path="/login" element={<Login/>}/>
<Route path="/rejistration" element={<Rejiseration/>} />
<Route path="*" element={<Notfound/>}/>    
   </Routes>
   </BrowserRouter>
  )
}

export default Router

