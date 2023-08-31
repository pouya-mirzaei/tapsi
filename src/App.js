import React from 'react';
import ContactUs from './Contact-us/ContactUs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeroSection from './Hero-section/HeroSection';
import About from './about-section/About';
import LicenseSectio from './licenses/LicenseSection';
import Portfolio from './portfolio/Portfolio';
import Services from './services/Services';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      darkMode: false,
    };

    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    this.setState((prev) => {
      return { darkMode: !prev.darkMode };
    });
  }

  render() {
    return (
      <div className={`App font-primary ${this.state.darkMode && 'dark'}`}>
        <Header onToggleDark={this.toggleDarkMode} />

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
}

export default App;
