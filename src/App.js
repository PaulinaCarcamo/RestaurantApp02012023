
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactForm from './components/ContactForm';
import Home from './views/Home.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
          <Route index element={<Home />} />
          <Route path='/contact' element={<ContactForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
