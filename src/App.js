
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import Nav from './Components/Nav';
import Hm from './Components/Hm';
import Log from './Components/Log';
import Sign from './Components/Sign';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Hm/>}/>
          <Route path='/Log' element={<Log/>}/>
          <Route path='/Sign' element={<Sign/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
