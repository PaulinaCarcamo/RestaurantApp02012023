
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './views/Home.js';
import Contact from './views/Contact.js';
import About from './views/About.js';
import Menu from './views/Menu.js';
import Rsvn from './views/Reservation.js';
import RsvnInfo from './components/ReservationInfo.js';
import './App.css';
import RsvnDoc from './components/ReservationDoc.js';

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
            <Route path='/reservation' element={<Rsvn />} />
            <Route path='/rsvninfo' element={<RsvnInfo/>}/>
            <Route path='/rsvndoc' element={<RsvnDoc/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
