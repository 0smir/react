import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/structure-components/Header';
import Home from './components/pages/home/Home';
import Blog from './components/pages/blog/Blog';
import About from './components/pages/about/About';
import Error from './components/pages/error/Error';
import Footer from './components/structure-components/Footer';

import './styles/header.css';


function App() {
  const NavigationItems = [
    {
        id: 1,
        title: 'Home',
        linkUrl: '/'
    },
    {
        id: 2,
        title: 'About',
        linkUrl: '/about'
    },
    {
        id: 3,
        title: 'Blog',
        linkUrl: '/blog'
    },

];


  return (
    <div className="App">
      <Header navItems = {NavigationItems}/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
