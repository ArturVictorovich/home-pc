import { Outlet } from 'react-router-dom';
import Header from './layout/Header/Header.tsx';
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
