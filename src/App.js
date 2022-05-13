import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import AuthState from "./components/context/auth/AuthState";

function App() {
  return (
    <AuthState>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </AuthState>
  );
}

export default App;
