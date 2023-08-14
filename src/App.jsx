import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Pandits from './components/pages/Pandits'
import ContactUs from './components/pages/Contactus'
import MehndiArtists from './components/pages/Mehendi'
import DJs from './DJ'
import Dancers from './Dancers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* //  <ContactUs/> */}
     {/* <Pandits/> */}
     {/* <MehndiArtists/> */}
     <DJs/>
     {/* <Dancers/> */}
    </>
  )
}

export default App
