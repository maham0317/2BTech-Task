import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import TiltCards from './components/TiltCards'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Home />
      <AboutUs />
      <TiltCards />
      <Portfolio/>
      <Footer />
    </>
  )
}

export default App
