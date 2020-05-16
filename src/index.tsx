import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-nunito-sans';
import 'normalize.css';
import 'focus-visible/dist/focus-visible.min';
import './styles/index.scss';
import { Amplify } from 'aws-amplify';
import * as serviceWorker from './serviceWorker';
import Navbar from './pages/navbar';
import Cover from './pages/cover';
import HowItWorks from './pages/howitworks';
import AboutUs from './pages/aboutus';
import amplifyConfig from './configs/amplify';

const App: React.FC = () => {
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
    </>
  );
};

Amplify.configure(amplifyConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
