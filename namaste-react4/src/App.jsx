import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

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
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};


export default App
