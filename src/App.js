import { BrowserRouter as Router, Link } from 'react-router-dom';
import * as Panelbear from '@panelbear/panelbear-js';
import { Typography, ThemeProvider } from '@material-ui/core';

import './App.css';
import theme from './theme';
import logoWhite from './imgs/logo-white.svg';
import everywhere from './imgs/everywhere.png';
import partners from './imgs/partners.png';
import background from './imgs/background.png';
import moralis from './imgs/moralis.png';
import unity from './imgs/unity.png';
import map from './imgs/map.png';
import galaxy from './imgs/galaxy.png';

// Load the Panelbear tracker once in your app
const panelbearConfig = {
  debug:
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? true
      : false,
  autoTrack: false,
};
Panelbear.load('HsvjnAnvXvD', panelbearConfig);
Panelbear.trackPageview();
Panelbear.track(
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'cosmicexodus-website--App--dev'
    : 'cosmicexodus-website'
);

function App() {
  const socials = [
    {
      class: 'fa-brands fa-twitter',
      url: 'https://twitter.com/Cosmic_Exodus',
    },
    {
      class: 'fa-brands fa-telegram',
      url: 'https://t.me/Cosmic_Exodus',
    },
    {
      class: 'fa-brands fa-instagram',
      url: 'https://www.instagram.com/cosmic_exodus/',
    },
    {
      class: 'fa-brands fa-medium',
      url: 'https://medium.com/@Cosmic_exodus',
    },
    {
      class: 'fa-brands fa-youtube',
      url: 'https://www.youtube.com/@cosmicexodus/',
    },
  ];

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <img alt="background" id="background" src={background} />
          <header>
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'center',
              }}
            >
              <Link to="/">
                <img src={logoWhite} id="logo" alt="cosmic-logo" />
              </Link>
              <Link to="/">
                <h2 className="shy">HOME</h2>
              </Link>
              <h2 className="shy-disable">GAMEPLAY</h2>
              <h2 className="shy-disable">WAITLIST</h2>
              <a href="https://cosmic-exodus.gitbook.io/whitepaper/">
                <h2 className="shy">WHITEPAPER</h2>
              </a>
              <h2 className="shy-disable">COSMIC DECK</h2>
            </div>
            <button
              className="secondary"
              type="button"
              onClick={() => openInNewTab('https://discord.gg/36AdSFvSX5')}
            >
              <i className="fa-brands fa-discord" />
              Discord
            </button>
          </header>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '62vh', // <-- this is the magic
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '  34.81rem',
                gap: '4rem',
                marginTop: '1.5rem',
                marginBottom: '3rem',
              }}
              className="content"
            >
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                  marginBottom: '3.5rem',
                }}
              >
                <Typography>OUR PARTNERS</Typography>
                <img src={partners} alt="partners" style={{ width: '8rem' }} />
              </div>
              <h1>An immersive strategy gamefi experience</h1>
              {/* <button className="orange-CTA" type="button">
            Download the game <i className="fa-brands fa-windows" />{' '}
          </button> */}
            </div>
            <img src={galaxy} id="galaxy" alt="galaxy" />
            <img src={map} id="map" alt="map" />
          </div>
          <footer>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <img src={everywhere} alt="eveywhere" />
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                }}
              >
                <h2 className="shy-disable">About us</h2>
                <a href="https://t.me/Cosmic_Exodus">
                  <h2 className="shy">Contact us</h2>
                </a>
                <h2 className="shy-disable">FAQ</h2>
              </div>
            </div>
            <div
              style={{
                marginTop: '2rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p style={{ textAlign: 'start' }}>
                © 2023 | Cosmic Exodus - All right reserved
                <br />
                <a href="/">Privacy Policy</a>
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                }}
              >
                {socials.map((social) => (
                  <button
                    type="button"
                    key={`${social.class}-social-button`}
                    onClick={() => openInNewTab(social.url)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      padding: 0,
                    }}
                  >
                    <i className={`${social.class} social`} />
                  </button>
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                }}
              >
                <p>Powered by</p>
                <a href="https://unity.com/">
                  <img alt="unity" src={unity} />
                </a>
                <a href="https://moralis.io/">
                  <img alt="moralis" src={moralis} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
