import './App.css';
import { Mainpage } from './pages/Mainpage';
import { Invest } from './pages/Invest';
import { Apply } from './pages/Apply';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <main id='home'>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/invest" element={<Invest />}/>
          <Route path="/apply" element={<Apply />}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
