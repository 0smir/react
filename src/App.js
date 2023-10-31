import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/pages/home/Home';
import Blog from './components/pages/blog/Blog';
import About from './components/pages/about/About';
import Error from './components/pages/error/Error';


import './styles/header.css';
import './styles/footer.css';


function App() {
 


  return (
    <div className="App">
    
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
