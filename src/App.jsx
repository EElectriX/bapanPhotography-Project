import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from './components/profilecard/ProfileCard';
import Navbar from './components/navbar/Navbar';
import './App.css'
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Nav/>
      <main >
          <Routes>
            <Route path='/' element={<Hero/>}/>
          </Routes>
      </main>
    </Router>
  )
}

export default App