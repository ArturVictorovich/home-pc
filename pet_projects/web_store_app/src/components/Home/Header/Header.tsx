import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa6';
import NavBar from './NavBar.tsx';
const Header = () => {
  return (
    <>
      <header>
        <div className="bg-black h-10 flex flex-row items-center justify-evenly">
          <div className="flex flex-row items-center">
            <div className="text-white text-sm font-regular text-center mr-1">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </div>
            <Link
              className=" text-white font-semibold cursor-pointer text-sm"
              to=""
            >
              ShopNow
            </Link>
          </div>
          <button className=" text-white flex flex-row items-center cursor-pointer">
            English
            <FaAngleDown />
          </button>
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
