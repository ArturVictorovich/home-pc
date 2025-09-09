import React from 'react';
import Slider from './Slider';

const About = () => {
  return (
    <div className="p-4 ">
      <div className="text-[14px] mb-[42px]">
        <button className="text-black/50 mr-1 cursor-pointer">Home</button>
        <span className="text-black/50 mr-1 ">/</span>
        <button className="cursor-pointer">About</button>
      </div>
      {/* main text */}
      <section className="mb-4">
        <h1 className="font-semibold text-[54px] mb-10">Our Stroy</h1>
        <div className="text-full mb-6 ">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </div>
        <div className="mb-10">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </div>

        <img
          src="/Side_Image.png"
          width="480px"
          alt="about"
          className="rounded mb-7"
        />
      </section>
      {/* карточки */}
      <section className="grid grid-cols-2 gap-1.5 mb-7">
        <div className=" rounded h-[230px] border-solid border border-black/30 flex flex-col items-center justify-center ">
          <div className="rounded-full  relative h-[80px] w-[80px] flex items-center justify-center bg-black/30">
            <div className="block h-[58px] w-[58px] absolute bg-black rounded-full"></div>
            <img
              src="/src/icons/icon_shop.svg"
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
              src="/src/icons/Icon-Sale.svg"
              className="z-10 "
              width="40px"
              alt="img"
            />
          </div>
          <div className="font-bold text-white text-[3rem]">33k</div>
          <div className="text-[1rem]  text-white">Mopnthly Produduct Sale</div>
        </div>
        <div className=" rounded h-[230px] border-solid border border-black/30 flex flex-col items-center justify-center ">
          <div className="rounded-full  relative h-[80px] w-[80px] flex items-center justify-center bg-black/30">
            <div className="block h-[58px] w-[58px] absolute bg-black rounded-full"></div>
            <img
              src="/src/icons/icon_shop.svg"
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
              src="/src/icons/icon_shop.svg"
              className="z-10"
              width="40px"
              alt="img"
            />
          </div>

          <div className="font-bold text-[3rem]">25k</div>
          <div className="text-[1rem]">Anual gross sale in our site</div>
        </div>
      </section>
      {/* слайдер */}
      <Slider />
    </div>
  );
};

export default About;
