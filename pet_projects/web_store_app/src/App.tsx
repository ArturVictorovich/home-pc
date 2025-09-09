import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLouyout from './components/MainLouyout.tsx';
import Home from './components/Home/Home.tsx';
import About from './components/About/About.tsx';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainLouyout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contacts />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
