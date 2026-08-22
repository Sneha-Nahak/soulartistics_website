import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'

import AllRoutes from './routes/AllRoutes'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load - adjust timing as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loading screen shows for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Navbar />
      <div className="app-content">
        <AllRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App
