import "./App.css";
import logo from "./imgs/logo.png";
import everywhere from "./imgs/everywhere.png";
import partners from "./imgs/partners.png";
import background from "./imgs/background.png";
import moralis from "./imgs/moralis.png";
import unity from "./imgs/unity.png";
import map from "./imgs/map.png";
import galaxy from "./imgs/galaxy.png";

function App() {
  const icons = [
    {
      class: "fa-brands fa-twitter",
    },
    {
      class: "fa-brands fa-telegram",
    },
    {
      class: "fa-brands fa-instagram",
    },
    {
      class: "fa-brands fa-medium",
    },
    {
      class: "fa-brands fa-youtube",
    },
  ];
  return (
    <div className="App">
      <img alt="background" id="background" src={background} />
      <header>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <img src={logo} id="logo" alt="cosmic-logo" />
          <h2 className="shy">HOME</h2>
          <h2 className="shy">GAMEPLAY</h2>
          <h2 className="shy">WAITLIST</h2>
          <h2 className="shy">WHITEPAPER</h2>
          <h2 className="shy">COSMIC DECK</h2>
        </div>
        <button className="secondary">
          <i className="fa-brands fa-discord"></i>Discord
        </button>
      </header>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "  34.81rem",
            gap: "4rem",
            marginTop: "1.5rem",
            marginBottom: "3rem",
          }}
          className="content"
        >
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            <p>OUR PARTNERS</p>
            <img src={partners} alt="partners" style={{ width: "8rem" }} />
          </div>
          <h1>An immersive strategy gamefi experience</h1>
          <button className="orange-CTA">
            Download the game <i class="fa-brands fa-windows"></i>{" "}
          </button>
        </div>
        <img src={galaxy} id="galaxy" alt="galaxy" />
        <img src={map} id="map" alt="map" />
      </div>
      <footer>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={everywhere} alt="eveywhere" />

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            <h2 className="shy">About us</h2>
            <h2 className="shy">Contact us</h2>
            <h2 className="shy">FAQ</h2>
          </div>
        </div>
        <div
          style={{
            marginTop: "2rem",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ textAlign: "start" }}>
            ©2022 | Cosmic Exodus - All right reserved
            <br />
            Privacy Policy
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            {icons.map((icon, index) => (
              <i key={`social-${index}`} className={`${icon.class} social`}></i>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
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
