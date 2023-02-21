
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './views/Home.js';
import Contact from './views/Contact.js';
import About from './views/About.js';
import Menu from './views/Menu.js';
import Reservation from './views/Reservation.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/reservation' element={<Reservation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
