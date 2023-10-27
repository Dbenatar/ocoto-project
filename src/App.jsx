import './App.css'
import Home from "./components/pages/Home"
import Team from "./components/pages/Team"
import Gups from "./components/pages/Gups"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <>
    <header>
      <h1>Maia's Octo database</h1>
        <Link to="/">Home</Link>
        <Link to="/team">Team</Link>
        <Link to="/gups">Gups</Link>
    </header>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/team" element={<Team />} />
    <Route path="/gups" element={<Gups />} />
    </Routes> 

    <footer><p>&copy;Created by Dom Benatar for Maia</p></footer>
    </>
    </BrowserRouter>
  )
}

export default App
