import Header from './Header/Header';
import HeroSection from './Hero-section/HeroSection';
import About from './about-section/About';
import LicenseSectio from './licenses/LicenseSection';
import Portfolio from './portfolio/Portfolio';
import Services from './services/Services';

function App() {
  return (
    <div className="App font-primary">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <LicenseSectio />
    </div>
  );
}

export default App;
