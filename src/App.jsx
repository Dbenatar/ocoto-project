import "./App.css";
import Home from "./components/pages/Home";
import Crew from "./components/pages/Crew";
import Gups from "./components/pages/Gups";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <div class="header">
          <header>
            <img
              src="src/assets/images/logo.jpeg"
              alt="logo"
              class="logo"
            ></img>
            <h1>Maia's Octo database</h1>

            <nav>
              <ul>
                <li>
                  <a>
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/crew">Crew</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/gups">Gups</Link>
                  </a>
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
