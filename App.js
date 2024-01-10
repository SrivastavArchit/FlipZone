import React from 'react';
import './App.css';
import Switcher from "./components/Switcher";
import Navbar from './components/navbar/Navbar' ;
import {
  BrowserRouter,
  Route,
  Routes,
  
} from 'react-router-dom';
import { motion } from 'framer-motion';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';

import Footer from './components/footer/Footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';
import Bolejo from './pages/BoleJo/Bolejo';








function App() {
  
  return (
    <motion.div  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} className="App">
     <BrowserRouter>
  
      <Navbar/> 
     
      <Routes>


         <Route path="/" element={<Shop/>}/>  
         <Route path="/cart" element={<Cart/>}/> 
         <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" /> }/>
        <Route path="/womens" element={<ShopCategory banner={women_banner}category="women"  />}/>
        <Route path="/kids" element={<ShopCategory  banner={kid_banner}category="kid"/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/Bolejo' element={<Bolejo/>}/>
         </Routes>
        
        
       <Footer/>
        


     
    
      
       </BrowserRouter>
    </motion.div>
  );
}

export default App;
