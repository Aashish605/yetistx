import Navbar from "./components/Navbar"
import Section1 from "./components/Section1"
import About from "./components/About"
import Tokenomics from "./components/Tokenomics"
import Wallets from "./components/Wallets"
import Buy from "./components/Buy"
import Roadmap from "./components/Roadmap"
import Last from "./components/Last"

const App = () => {
  return (
    <>
      <Navbar />
      <div id="section1">
        <Section1 />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="wallets">
      <Wallets />
      </div>
      <div id="buy">
      <Buy />
      </div>
      <div id="roadmap">
      <Roadmap />
      </div>
      <div id="last">
      <Last />
      </div>
    </>
  )
}

export default App