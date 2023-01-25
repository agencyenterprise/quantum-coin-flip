import Nullstack from "nullstack";
import Home from "./Home";

class Application extends Nullstack {
  prepare({ page }) {
    page.locale = "en-US";
    page.title = "Quantum Coin Flip - The Most Random Coin Flip on the Internet";
    page.description = "Flip a coin that harnesses the inherent randomness of the universe (and learn about Quantum Computing too)";
    page.image = "https://www.quantumcoinflip.com/quantumcoinflip.png"; 
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;800&display=swap" rel="stylesheet" />
        <link href="styles.css" rel="stylesheet" />
      </head>
    );
  }

  render() {
    return (
      <main>
        <Head />
        <Home route="/" />
        <div class="footer">
          Made with <span class="red">❤</span> by{" "}
          <a href="https://ae.studio/quantum-computing" target="_blank">
            AE Studio
          </a>
        </div>
      </main>
    );
  }
}

export default Application;
