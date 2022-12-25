import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';
import UpdateUser from './pages/UpdateUser';
import Navigation from './Navbar';


function App() {
    const [id,setId] = useState("");
    const getId = (id) => {
        setId(id);
    }
  return (
    <BrowserRouter>
    <Navigation />
        <Routes>
            <Route path='/' element={<Home getId={getId} />} />
            <Route path='/updateForm' element={<UpdateUser id={id} />} />
            <Route path='/createForm' element={<CreateUser />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App