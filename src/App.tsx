import './App.css';
import GlobalStyle from './GlobalStyles';
import { Navbar } from './components';
import Home from './pages/Home';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
  } from "react-router-dom";
import Stats from './pages/Stats';

function App() {
  return (
    <div>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>} >
                    <Route index element={<Home/>} />
                    <Route  path="dashboard" element={<Home/>} />
                    <Route path="stats" element={<Stats/>} />
                </Route>
            </Routes>
        </BrowserRouter>
        <Outlet/>
    </div>
  );
}

export default App;
