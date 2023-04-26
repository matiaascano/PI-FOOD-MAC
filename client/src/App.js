import './App.css';
import { Route, Routes} from 'react-router-dom';
import LandingPage  from './components/LandingPage/landingpage.jsx';
import Home from './components/Home/Home';
import Detail from './components/DetailRecipe/Detail';
import NewRecipe  from './components/NewRecipe/NewRecipe';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/recipes/:detailId" element={<Detail />}/>
        <Route path="/recipe" element={<NewRecipe />}/>
        </Routes>
    </div>
  );
}

export default App;
