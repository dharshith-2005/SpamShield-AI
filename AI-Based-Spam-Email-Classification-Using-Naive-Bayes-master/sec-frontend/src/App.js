import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EmailAnalyzer from "./components/EmailAnalyzer";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Hero />

      <EmailAnalyzer />

      <Features />

      <HowItWorks />

      <TechStack />

      <Footer />

    </div>
  );
}

export default App;