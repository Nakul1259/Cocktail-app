import './App.css';
import Navbar from './Navbar';
import {Routes, Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import SingleCocktail from './SingleCocktail';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/cocktail/:id' element = {<SingleCocktail />} />
      </Routes>
    </div>
    
  );
}

export default App;
