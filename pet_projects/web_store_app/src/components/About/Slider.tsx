import { useState } from 'react';
import slides from './slides.ts';
const Slider = () => {
  const [curentSlide, setCurrentSlide] = useState<number>(2);
  return (
    <section>
      <div className="w-full mx-auto">
        <div className="h-[430px] flex items-end justify-center rounded bg-black/5">
          <img src={slides[curentSlide].photoSrc} alt="photo" width="full" />
        </div>
        <div className=" font-medium ">{slides[curentSlide].name}</div>
        <div className="font-regular">{slides[curentSlide].post}</div>
        <div></div>
      </div>
    </section>
  );
};

export default Slider;
