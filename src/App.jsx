/* eslint-disable */
import Header from "./components/Header.jsx"
import 'animate.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas } from './components/index.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Header />
          <Hero />
        </div>
        <About className="bg-primary" />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
