import './App.css';
import SimpleBottomNavigation from './navigation/MainContainer';

import Signup from './components/Signup';
import Main from './components/Main.js';
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

    <Navbar/>
    
   </div>
  );
  
}

export default App;
