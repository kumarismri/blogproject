import './App.css';
import Bollywood from './Component/Bollywood';
import ComponentOne from './Component/ComponentOne';
import { MainFunction } from './Component/Contextfr';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Component/Home';
import Articles from './Component/Articles';

function App() {
  return (
      <MainFunction>
        <Router>
        <div className="App">
        <ComponentOne/>
        </div>
        <Routes>
          <Route path="/bolly/:b" element={<Bollywood/>}/>
          <Route path="/bolly/article/:ID/:b" element={<Articles/>} />
          <Route path="/home" element={<Home/>}/>        
          <Route path="/home/article/:ID/:b" element={<Articles/>}/>      
          <Route path="/" element={<Home/>}/>
        </Routes>
        </Router>        
       </MainFunction> 
    
  );
}

export default App;
