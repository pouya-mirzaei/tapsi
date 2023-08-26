import ContactUs from './Contact-us/ContactUs';
import Footer from './Footer/Footer';
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

      <main>
        <HeroSection />
        <About />
        <Services />
        <Portfolio />
        <LicenseSectio />
        <ContactUs />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
