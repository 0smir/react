import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/pages/home/Home';
import Blog from './components/pages/blog/Blog';
import FAQ from './components/pages/faq/FAQ';
import About from './components/pages/about/About';
import ContactUs from './components/pages/contact_us/ContactUs';
import Error from './components/pages/error/Error';
import Article from './components/pages/blog/Article';

//styles imports

import "./styles/common_styles.scss";


function App() {
 
  return (
    <div className="App">
    
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="article/:id" element={<Article />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
