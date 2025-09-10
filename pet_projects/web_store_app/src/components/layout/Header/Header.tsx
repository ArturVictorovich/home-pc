import { FaChevronDown } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiSearchLine } from 'react-icons/ri';
import { GoHeart } from 'react-icons/go';
import { IoCartOutline } from 'react-icons/io5';
const Header = () => {
  return (
    <header>
      {/* топ header */}
      <section className="bg-black  h-7 relative flex justify-center  items-center">
        <h1 className="text-white  font-regular text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <button className="text-white mr-2 font-semibold cursor-pointer hover:underline ">
          ShopNow
        </button>
        <button className="text-white text-sm absolute right-1 flex items-center">
          English <FaChevronDown />
        </button>
      </section>

      {/* навигация */}
      <section className="flex px-5 h-9.5 justify-between">
        <div className="text-2xl font-bold">Exclusive</div>
        <div className="flex">
          <form className="">
            <input
              className="rounded h-9.5 w-60.75 bg-white/10"
              placeholder="What are you looking for?"
              type="seacrch"
            />

            <button className="right-1">
              <RiSearchLine />
            </button>
          </form>
          <button className="mr-2">
            <GoHeart />
          </button>
          <button className="mr-8">
            <IoCartOutline />
          </button>
          <button className="text-2xl ">
            <RxHamburgerMenu />
          </button>
        </div>
      </section>
    </header>
  );
};
export default Header;
