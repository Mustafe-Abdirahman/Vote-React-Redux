import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import  Timer  from './components/timer/timer'
import Competitors from './components/competitors/competitors'
import VoteModal from './components/modal/VoteModal'


function App() {
 return (
  <div className='App'>
    <Header />
    <Timer />
    <Competitors />
    <VoteModal />
  
  </div>
 )
}

export default App
