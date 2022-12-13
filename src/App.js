import './App.css';
import SimpleBottomNavigation from './navigation/MainContainer';

import Signup from './components/Signup';
import Main from './components/Main';
import Groupcup from './navigation/Groupcup';
import Navbar from './components/Navbar';
import { DataGrid } from '@mui/x-data-grid';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import Address from './components/Address';
import Contact from './components/Contact';
import Thanku from './navigation/Thanku';


function App() {
 
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navbar/>}/>
        <Route path='login' element={<Main/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='product' element={<Groupcup/>}/>
        <Route path='address' element={<Address/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='thanku' element={<Thanku/>}/>
      </Routes>
    </BrowserRouter>
    
    
    
   </div>
  );
  
}

export default App;
