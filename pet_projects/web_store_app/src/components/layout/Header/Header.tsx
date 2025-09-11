import { FaChevronDown } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiSearchLine } from 'react-icons/ri';
import { GoHeart } from 'react-icons/go';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
  const [burger, setBurger] = useState<boolean>(false);
  return (
    <header className="w-full">
      {/* топ header */}
      <section
        className="bg-black px-4 h-8 relative flex justify-start items-center
        md:px-11.75 md:justify-between "
      >
        <div className="flex flex-row items-center">
          <h1 className="text-white me-1 font-regular text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h1>
          <Link
            to="*"
            className="text-white mr-2  font-semibold cursor-pointer hover:underline "
          >
            ShopNow
          </Link>
        </div>

        <button
          className="text-white text-sm flex items-center absolute right-4
        md:static"
        >
          English <FaChevronDown />
        </button>
      </section>

      {/* навигация */}
      <section
        className="flex px-4 h-12 justify-between items-center
      md:px-11.75
      "
      >
        <div className="flex items-center">
          {/* бургер */}
          <button className="pointer mr-3 md:hidden ">
            <RxHamburgerMenu className="size-8" />
          </button>{' '}
          <div
            className="text-2xl mr-10 font-bold align-items:center
          md:mr-0"
          >
            Exclusive
          </div>
        </div>
        <ul className="">
          <Link className="mr-3" to="*">
            Home
          </Link>
          <Link className="mr-3" to="*">
            Contact
          </Link>
          <Link className="mr-3" to="*">
            About
          </Link>
          <Link to="*">Sign Up</Link>
        </ul>
        <div className="flex">
          <form className="relative mr-3">
            <input
              className="rounded shadow h-7 p-1  w-60.75 bg-black/10
              md:w-55"
              placeholder="What are you looking for?"
              type="seacrch"
            />
            <button
              type="submit"
              title="search"
              className="h-7 absolute right-2"
            >
              <RiSearchLine className="size-5" />
            </button>
          </form>
          <Link to="*" className="mr-2">
            <GoHeart className="size-7" />
          </Link>
          <Link to="*">
            <IoCartOutline className="size-7" />
          </Link>
        </div>
        {/* <ul className="flex bg absolute top-15 flex-col">
          <Link to="*">Home</Link>
          <Link to="*">Contact</Link>
          <Link to="*">About</Link>
          <Link to="*">Sign Up</Link>
        </ul> */}
      </section>
    </header>
  );
};
export default Header;
