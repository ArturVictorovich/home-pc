import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout.tsx';
import Home from './pages/Home.tsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
