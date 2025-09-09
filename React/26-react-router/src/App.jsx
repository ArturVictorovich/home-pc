import './App.css';
import { MainLoyaut } from './layouts/MainLoyaut';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLoyaut />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
