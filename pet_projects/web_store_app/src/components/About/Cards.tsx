const Cards = () => {
  return (
    <section className="grid grid-cols-2 gap-1.5 mb-7">
      <div className=" rounded h-[230px] border-solid border border-black/30 flex flex-col items-center justify-center ">
        <div className="rounded-full  relative h-[80px] w-[80px] flex items-center justify-center bg-black/30">
          <div className="block h-[58px] w-[58px] absolute bg-black rounded-full"></div>
          <img
            src="/src/icons/about/icon_shop.svg"
            className="z-10"
            width="40px"
            alt="img"
          />
        </div>
        <div className="font-bold text-[3rem]">10.5k</div>
        <div className="text-[1rem]">Sallers active our site</div>
      </div>
      <div className="bg-red-button shadow rounded h-[230px] border-solid  flex flex-col items-center justify-center ">
        <div className="rounded-full  relative h-[80px] w-[80px] flex items-center justify-center bg-black/30">
          <div className="block h-[58px] w-[58px] bg-white absolute rounded-full"></div>
          <img
            src="/src/icons/about/Icon-Sale.svg"
            className="z-10 "
            width="40px"
            alt="img"
          />
        </div>
        <div className="font-bold text-white text-3">33k</div>
        <div className="text-1  text-white">Mopnthly Produduct Sale</div>
      </div>
      <div className=" rounded h-[230px] border-solid border border-black/30 flex flex-col items-center justify-center ">
        <div className="rounded-full  relative h-[80px] w-[80px] flex items-center justify-center bg-black/30">
          <div className="block h-[58px] w-[58px] absolute bg-black rounded-full"></div>
          <img
            src="/src/icons/about/icon_shop.svg"
            className="z-10"
            width="40px"
            alt="img"
          />
        </div>

        <div className="font-bold text-[3rem]">45.5k</div>
        <div className="text-[1rem]">Customer active in our site</div>
      </div>
      <div className=" rounded h-[230px] border-solid border border-black/30 flex flex-col items-center justify-center ">
        <div className="rounded-full  relative h-[80px] w-[80px] flex items-center justify-center bg-black/30">
          <div className="block h-[58px] w-[58px] absolute bg-black rounded-full"></div>
          <img
            src="/src/icons/about/icon_shop.svg"
            className="z-10"
            width="40px"
            alt="img"
          />
        </div>

        <div className="font-bold text-[3rem]">25k</div>
        <div className="text-[1rem]">Anual gross sale in our site</div>
      </div>
    </section>
  );
};

export default Cards;
