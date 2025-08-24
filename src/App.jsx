import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from './components/profilecard/ProfileCard';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProfessionalFooter from './components/ProfessionalFooter';
import LoadingPage from './components/LoadingPage';
import Services from './components/Services';
import ContactPage from './components/ContactPage';
import Classes from './components/Classes';
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage onLoadComplete={handleLoadComplete} />;
  }



  return (
    // <Router>
      // <Nav/>

      // <main >
      //     // <Routes>
      //     //   <Route path='/' element={<ThreeColumns/>}/>
           
      //     //   <Route path='/About' element={<Hero/>}/>
      //     // </Routes>


      // </main>

    //   <div className="m-0 p-0 overflow-x-hidden">
    //  <Navbar />
    //  <main>
    //   <Routes>
    //      <Route path='/' element={<HomePage />}/>
    //   </Routes>
    //  </main>

    //  <HomePage />
    //   <ProfessionalFooter />
    // </div>
    // </Router>
      
     <Router>
      <div className="m-0 p-0 overflow-x-hidden">
        <Navbar />

        <main >
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes like below as needed */}
            <Route path="/About" element={<ProfileCard />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Classes" element={<Classes />} />
            <Route path="/Contact" element={<ContactPage />} />
          </Routes>
        </main>

        <ProfessionalFooter />
      </div>
    </Router>
  )
}

export default App