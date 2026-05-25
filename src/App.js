import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Popular from './pages/Popular';
import Toprated from './pages/Toprated';
import Upcoming from './pages/Upcoming';
import Search from './pages/Search';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Popular />} />
            <Route path='/top-rated' element={<Toprated />} />
            <Route path='/upcoming' element={<Upcoming />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
