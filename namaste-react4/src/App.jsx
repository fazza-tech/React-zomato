import React ,{lazy,Suspense} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Error from './components/Error'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestroMenu from './components/RestoMenu';
import Shimmer from './components/Shimmer';


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

const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => import('./components/About'))

function App  () {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<Suspense fallback={<Shimmer/>}><About /></Suspense>} />
          <Route path="/contact" element ={<Contact />} />
          <Route path="/grocery" element={<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>}/>
          <Route path="*" element={<Error />} /> 
          <Route path="/restaurants/:resId" element = {<RestroMenu/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};


export default App
