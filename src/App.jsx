import { useState } from 'react'
import ProfileCard from './components/profilecard/ProfileCard';
import Navbar from './components/navbar/Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <ProfileCard />
      </main>
    </>
  )
}

export default App