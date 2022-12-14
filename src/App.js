import './App.css';
import logo from './imgs/logo.png';
import everywhere from './imgs/everywhere.png';
import partners from './imgs/partners.png';
import background from './imgs/background.png';
import moralis from './imgs/moralis.png';
import unity from './imgs/unity.png';
import map from './imgs/map.png';
import galaxy from './imgs/galaxy.png';

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
          <img src={logo} id="logo" alt="cosmic-logo" />
          <h2 className="shy">HOME</h2>
          <h2 className="shy">GAMEPLAY</h2>
          <h2 className="shy">WAITLIST</h2>
          <h2 className="shy">WHITEPAPER</h2>
          <h2 className="shy">COSMIC DECK</h2>
        </div>
        <button className="secondary" type="button" onClick={() => openInNewTab('https://discord.gg/36AdSFvSX5')}>
          <i className="fa-brands fa-discord" />
          Discord
        </button>
      </header>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
            }}
          >
            <p>OUR PARTNERS</p>
            <img src={partners} alt="partners" style={{ width: '8rem' }} />
          </div>
          <h1>An immersive strategy gamefi experience</h1>
          <button className="orange-CTA" type="button">
            Download the game <i className="fa-brands fa-windows" />{' '}
          </button>
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
            <h2 className="shy">About us</h2>
            <h2 className="shy">Contact us</h2>
            <h2 className="shy">FAQ</h2>
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
            ©2022 | Cosmic Exodus - All right reserved
            <br />
            Privacy Policy
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
                style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}
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
            <img alt="unity" src={unity} />
            <img alt="moralis" src={moralis} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
