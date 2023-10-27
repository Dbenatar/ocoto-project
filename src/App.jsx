import './App.css'

function App() {
  return (
    <BrowserRouter>
    <>
    <header>
      <h1>React router Dom</h1>
        <Link to="/">Home</Link>
        <Link to="/barnicles"></Link>
    </header>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/barnicles" element={<Barnicles />} />
    </Routes> 

    <footer><p>&copy;Created be Dom Benatar for Maia</p></footer>
    </>
    </BrowserRouter>
  )
}

export default App
