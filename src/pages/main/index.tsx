import React from 'react';
import Navbar from './navbar';
import Cover from './cover';
import HowItWorks from './howitworks';
import AboutUs from './aboutus';
import OurTeam from './ourteam';

const MainPage: React.FC = () => {
  const [scrolled, setScrolled] = React.useState('');
  const handleScroll = React.useCallback(() => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll < 50) {
      setScrolled('');
    } else {
      setScrolled('navbarTop');
    }
  }, []);
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
    <>
      <Navbar scrolled={scrolled} />
      <Cover />
      <HowItWorks />
      <AboutUs />
      <OurTeam />
    </>
  );
};

export default MainPage;
