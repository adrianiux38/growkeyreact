import './App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { Hightlight } from './components/Highlight';
import { Store } from './components/Store';
import { Steps } from './components/Steps';

function App() {
  return (
    <main id='home'>
      <Navbar/>
      <Header/>
      <Features/>
      <Hightlight/>
      <Store/>
      <Steps />
    </main>
  );
}

export default App;
