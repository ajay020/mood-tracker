import "./App.css";
import GlobalStyle from "./GlobalStyles";
import { Navbar } from "./components";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Stats from "./pages/Stats";
import SignUp from "./components/signup/Signup";
import Login from "./components/login/Login";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
