
import './App.css';
import Albums from './Components/Cards/Albums';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Albums />
    </div>
  );
}

export default App;
