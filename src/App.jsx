import React from 'react';
import TopNav from './components/TopNav';
import Navbar from './components/Navbar'
import Intro from './components/Intro';
import Service from './components/Service';
import Photos from './components/Photos';
import Location from './components/Location';
import ContactSection from './components/Contact';
import FAQSection from './components/FAQ';
import NewsSection from './components/news';
import ClientCommentsSection from './components/Comments';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <TopNav />
      <Navbar/>
      <Intro/>
      <Service/>
      <Photos/>
      <Location/>
      <ContactSection/>
      <FAQSection/>
      <NewsSection/>
      <ClientCommentsSection/>
      <Footer/>
    </div>
  );
}

export default App;