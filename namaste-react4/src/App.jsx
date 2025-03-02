import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestroMenu from './components/RestoMenu';

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

function App  () {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element ={<Contact />} />
          <Route path="*" element={<Error />} /> 
          <Route path="/restaurents/:resId" element = {<RestroMenu/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};


export default App
