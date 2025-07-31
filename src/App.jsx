import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from './components/profilecard/ProfileCard';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProfessionalFooter from './components/ProfessionalFooter';
import './App.css'
// import Hero from './components/Hero/Hero';
// import Nav from './components/Nav/Nav';
// import ThreeColumns from './components/ThreeColumns';
function App() {
  const [count, setCount] = useState(0)

  return (
    // <Router>
      // <Nav/>

      // <main >
      //     // <Routes>
      //     //   <Route path='/' element={<ThreeColumns/>}/>
           
      //     //   <Route path='/About' element={<Hero/>}/>
      //     // </Routes>


      // </main>

      <div className="m-0 p-0 overflow-x-hidden">
     <Navbar />

     <HomePage />
      <ProfessionalFooter />
    </div>
    // </Router>
  )
}

export default App