import "./App.css";
import Home from "./components/pages/Home";
import Team from "./components/pages/Crew";
import Gups from "./components/pages/Gups";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <div class="header">
          <header>
            <h1>
              Maia's Octo database<a href="src/assets/images/logo.jpeg"></a>
            </h1>

            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/crew">Crew</Link>
                </li>
                <li>
                  <Link to="/gups">Gups</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/gups" element={<Gups />} />
        </Routes>

        <footer>
          <p>&copy;Created by Dom Benatar for Maia</p>
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;
