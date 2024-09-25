
import './App.css'
import Mainvisaul from './components/MainVisual/Mainvisaul'
import Schedule from './components/Schedule/Schedule'
import Local from './components/Local/Local'
import ThanksYou from './components/ThanksYou/ThanksYou'
import Footer from './components/Footer/Footer'
import Invitation from './components/Invitation/Invitation'

function App() {

  return (
    <main>
      <Mainvisaul />
      <Schedule />
      <Local />
      <Invitation />
      <ThanksYou />
      <Footer />
    </main>
  )
}

export default App
