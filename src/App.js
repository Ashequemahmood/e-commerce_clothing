import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import pages
import Home from "./pages/Home.js"
import ProductDetails from "./pages/ProductDetails.js"
// import components
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Sidebar from "./components/Sidebar"


const App = () => {
  return <div className='overflow-hidden'>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </BrowserRouter>
  </div>;
};

export default App;
