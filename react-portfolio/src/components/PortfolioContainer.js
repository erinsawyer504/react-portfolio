import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';
import CSS from './style.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Projects') {
        return <Projects />;
    }
    if (currentPage === 'Contact'){
        return <Contact />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <div className="container">
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}