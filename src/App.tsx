import './App.css';
import Home from './pages/Home';
import GlobalStyle from './GlobalStyles';
import { Navbar } from './components';
function App() {
  return (
    <div>
        <GlobalStyle/>
        <Navbar/>
        <Home/>
    </div>
  );
}

export default App;
