import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import SnackOrBoozeApi from './helpers/API'
import NavBar from './components/NavBar'
import Menu from './components/FoodMenu'
import Snack from './components/FoodItem'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        let snacks = await SnackOrBoozeApi.getSnacks();
        let drinks = await SnackOrBoozeApi.getDrinks(); // Assuming this method exists
        setSnacks(snacks);
        setDrinks(drinks);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Closure Cafe </h1>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} />} />
            <Route path="/snacks" element={<Menu snacks={snacks} title="Snacks" type="snacks" />} />
            <Route path="/snacks/:id" element={<Snack items={snacks} type="snacks" cantFind="/snacks" />} />
            <Route path="/drinks" element={<Menu snacks={drinks} type="drinks" title="Drinks" />} />
            <Route path="/drinks/:id" element={<Snack items={drinks} type="drinks" cantFind="/drinks" />} />
            <Route path="*" element={<p>Hmmm. I can't seem to find what you want.</p>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
