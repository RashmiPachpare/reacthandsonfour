import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Student from './Components/Student';
import ContactUs from './Components/ContactUs';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <>
    
      { <div className='app'>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    
    </div>  }
    </> 
  );
}

export default App;
