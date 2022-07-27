import React from 'react';
import { Provider } from 'react-redux';
// import './App.scss';
import './index.scss';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomePage';
import Login from './Pages/Login/Login';
import {store} from './Types/configStore'


function App():React.ReactElement {
  return (
    
    <Provider store={ store }>
      <BrowserRouter>
      <Routes>
      <Route path='' element={<HomeTemplate/>}>
        <Route path ='/login' element={ <Login/> } />

      </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
