import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CareersPage from './Components/CareersPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/homepage" element={<HomePage />}></Route>
      <Route path="/careerspage" element={<CareersPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
