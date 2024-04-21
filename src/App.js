import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { AppProvider } from './Context';

//pages templates import start
import Layout from './Layout';
import Home from './components/pages/home/Home';
import Blog from './components/pages/blog/Blog';
import FAQ from './components/pages/faq/FAQ';
import About from './components/pages/about/About';
import ContactUs from './components/pages/contact_us/ContactUs';
import Error from './components/pages/error/Error';
import Article from './components/pages/blog/Article';
import TermsAndConditions from './components/pages/terms/TermsAndConditions';
import PrivacyPolicy from './components/pages/privacy/PrivacyPolicy';
import OurTeam from './components/pages/our_team/OurTeam';
import ServicePage from './components/pages/service/ServicePage';
// pages template imports end

//styles imports
import "./styles/common_styles.scss";


function App() {
 
  return (
    <AppProvider>
    <div className="App">
    
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="article/:id" element={<Article />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      
    </div>
    </AppProvider>
  );
}

export default App;
