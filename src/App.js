import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home.jsx';
import Catalog from './Pages/Catalog/Catalog.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
      </Routes>
    </Router>
  );
}

export default App;