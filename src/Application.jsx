import Nullstack from "nullstack";
import Home from "./Home";

class Application extends Nullstack {
  prepare({ page }) {
    page.locale = "en-US";
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;800&display=swap" rel="stylesheet" />
        <title>Quantum Coin Flip</title>
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
