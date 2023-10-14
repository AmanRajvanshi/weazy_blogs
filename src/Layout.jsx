import React from 'react';
import Header from './layoutComponents/Header';
import Footer from './layoutComponents/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
