import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <>
    <header>
      <h1>React router Dom</h1>
        <Link to="/">Home</Link>
        <Link to="/team"></Link>
    </header>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/team" element={<Team />} />
    </Routes> 

    <footer><p>&copy;Created be Dom Benatar for Maia</p></footer>
    </>
    </BrowserRouter>
  )
}

export default App
