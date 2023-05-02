import "./App.css";
import GlobalStyle from "./GlobalStyles";
import { Navbar } from "./components";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Stats from "./pages/Stats";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
