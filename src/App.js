
import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';

function App() {
  
  let Products=React.lazy(()=>import('./components/Products'))
  let Product=React.lazy(()=>import('./components/Items'))
let CartItem=React.lazy(()=>import('./components/CartItem'))
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <React.Suspense fallback={<Loading/>}>
     <Routes>
       <Route path="/" element={ <Products/>}/>
      
       <Route path="/cart" element={ <CartItem/>}/>
      <Route path="/item" element={<Product/>}/>
      </Routes>
      </React.Suspense>
    </div>
    </BrowserRouter>
  );
}

export default App;