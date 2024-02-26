import Nullstack from "nullstack";
import Caret from "./Caret";
import SectionTitle from "./SectionTitle";
import Text from "./Text";

class Home extends Nullstack {
  animating = false;
  flipping = false;
  flipResult = null;
  hasClicked = false;

  static async getResult({ database }) {
    const flips = database.collection("flips");
    const flip = await flips.findOneAndUpdate(
      { hasBeenUsed: false },
      { $set: { hasBeenUsed: true } }
    );
    if (flip.value) {
      return flip.value.result;
    }

    // Pick a random one if we've used everything in the db
    for await (const usedFlip of flips.aggregate([{ $sample: { size: 1 } }])) {
      return usedFlip.result;
    }
  }

  toss = async () => {
    this.hasClicked = true;
    if (this.animating) {
      return;
    }
    this.animating = true;
    this.flipResult = null;

    setTimeout(() => {
      this.flipping = true;
    }, 3000);
    setTimeout(() => {
      this.animating = false;
      this.flipping = false;
      if (result === 1) {
        this.flipResult = "heads";
      } else {
        this.flipResult = "tails";
      }
    }, 6000);

    const result = await this.getResult();
  };

  render() {
    const animatingClass = this.animating ? "animating" : "";
    const flippingClass = this.flipping ? "flipping" : "";
    const flippedClass =
      !this.flipping && this.flipResult
        ? this.flipResult === "heads"
          ? "flipped-heads"
          : "flipped-tails"
        : "";
    return (
      <>
        <a
          target="_blank"
          rel="norefferer"
          href="https://ae.studio/data-science?utm_source=sds&utm_medium=referral&utm_campaign=quantumcoinflip&utm_content=top-bar&utm_term=3ff5251a-e107-4d47-bfb8-b2962debd252"
        >
          <img src="/ae.svg" class="absolute left-6 invert h-10 top-6" />
        </a>
        <section id="coin-toss">
          <div id="flipped-text-heads" class={flippedClass}>
            Heads
          </div>
          <div id="flipped-text-tails" class={flippedClass}>
            Tails
          </div>
          <div
            id="coin"
            class={`${animatingClass} ${flippingClass} ${flippedClass}`}
            onclick={this.toss}
          >
            <div class="heads">
              <div class="internal">{"|1>"}</div>
            </div>
            <div class="tails">
              <div class="internal">{"|0>"}</div>
            </div>
          </div>
          <div id="diagram">
            <div
              id="qubit"
              class={`${animatingClass} ${flippingClass} ${flippedClass}`}
            >
              <div id="qubit-dot" />
              <div id="qubit-text">
                <div id="qubit-text-root2-0">
                  <img src="root2.png" />
                </div>
                <div id="qubit-text-0">{"|0>"}</div>
                <div id="qubit-text-plus"> + </div>
                <div id="qubit-text-root2-1">
                  <img src="root2.png" />
                </div>
                <div id="qubit-text-1">{"|1>"}</div>
              </div>
            </div>
            <hr />
            <div id="hadamard">H</div>
            <img id="measurement" src="measurement.png" />
            {!this.hasClicked && (
              <div id="click-to-flip">Click the coin to flip it</div>
            )}
          </div>
          <Caret />
          <SectionTitle id="whats-going-on">What's going on?</SectionTitle>
        </section>
        <section id="explanation">
          <Text />
        </section>
      </>
    );
  }
}

export default Home;
