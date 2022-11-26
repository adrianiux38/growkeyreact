import './App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Features } from './components/Features';

function App() {
  return (
    <main id='home'>
      <Navbar/>
      <Header/>
      <Features/>
    </main>
  );
}

export default App;
