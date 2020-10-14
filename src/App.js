import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer'

import './style.css'; /* поключение стилей */

function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Footer />
    </>
  );
}

export default App;