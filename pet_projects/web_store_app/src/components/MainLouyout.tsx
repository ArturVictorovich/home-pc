import { Outlet } from 'react-router-dom';
import Header from './Home/Header';
const MainLouyout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLouyout;
