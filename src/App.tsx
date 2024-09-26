import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'
import Mainvisaul from './components/MainVisual/Mainvisaul'
import Schedule from './components/Schedule/Schedule'
import Local from './components/Local/Local'
import ThanksYou from './components/ThanksYou/ThanksYou'
import Footer from './components/Footer/Footer'
import Invitation from './components/Invitation/Invitation'
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });
  })
  return (
    <main>
      <Mainvisaul />
      <Invitation />
      <Local />
      <Schedule />
      <ThanksYou />
      <Footer />
    </main>
  )
}

export default App
