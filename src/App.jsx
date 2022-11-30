import './App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { Hightlight } from './components/Highlight';
import { Steps } from './components/Steps';
import { Calltoactions } from './components/Calltoactions';
import { Quote } from './components/Quote';
import { Faq } from './components/Faq'

function App() {
  return (
    <main id='home'>
      <Navbar/>
      <Header/>
      <Features/>
      <Hightlight/>
      <Steps />
      <Calltoactions/>
      <Quote/>
      <Faq/>
    </main>
  );
}

export default App;
