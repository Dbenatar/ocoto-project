import './App.css'

function App() {
  return (
    <BrowserRouter>
    <>
    <header>
      <h1>React router Dom</h1>
        <Link to="/">Home</Link>
        <Link to="/about"></Link>
    </header>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    </Routes> 

    <footer><p>&copy;Manipulated Dom</p></footer>
    </>
    </BrowserRouter>
  )
}

export default App
