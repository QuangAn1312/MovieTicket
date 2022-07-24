import React from 'react';
import './App.scss';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomePage';
import Login from './Pages/Login/Login';


function App():React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='' element={<HomeTemplate/>}>
        <Route path ='/login' element={ <Login/> } />

      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
