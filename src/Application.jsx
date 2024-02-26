import Nullstack from "nullstack";
import Home from "./Home";

import "./styles.css";

class Application extends Nullstack {
  prepare({ page }) {
    page.locale = "en-US";
    page.title =
      "Quantum Coin Flip - The Most Random Coin Flip on the Internet";
    page.description =
      "Flip a coin that harnesses the inherent randomness of the universe (and learn about Quantum Computing too)";
    page.image = "https://www.quantumcoinflip.com/quantumcoinflip.png";
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;800&display=swap"
          rel="stylesheet"
        />
        <script src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <script src="https://www.quantumcoinflip.com/posthog.js" />
        <link href="styles.css" rel="stylesheet" />
      </head>
    );
  }

  hydrate() {}

  render() {
    return (
      <main>
        <Head />
        <Home route="/" />
        <div class="footer">
          Made with <span class="red">❤</span> by{" "}
          <a
            href="https://ae.studio/quantum-computing?utm_source=sds&utm_medium=referral&utm_campaign=quantumcoinflip&utm_content=top-bar&utm_term=3ff5251a-e107-4d47-bfb8-b2962debd252"
            target="_blank"
            rel="noreferrer"
            class="underline"
          >
            AE Studio
          </a>
        </div>
      </main>
    );
  }
}

export default Application;
