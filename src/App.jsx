import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import ProductUpdate from './components/ProductUpdate';
import ProductCreate from './components/ProductCreate';
import { useState } from 'react';

const App = () => {
  const [id, setId] = useState(0);
  return (
    <div>
      <div>  
        <h1 style={{textAlign:"center",fontFamily:"serif",padding:"24px",backgroundColor:"yellow"}}>Foods</h1>
      </div>

      <BrowserRouter>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products setId={setId} />} />
          <Route path="/edit/:id" element={<ProductUpdate id={id} />} />
          <Route path="/ProductCreate" element={<ProductCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;