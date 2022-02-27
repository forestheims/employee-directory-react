import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
