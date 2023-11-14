
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
