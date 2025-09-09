import { useState } from 'react';

const Slider = () => {
  const [slide, setSlide] = useState([]);

  return (
    <section>
      <div className="w-full mx-auto">
        <div className="h-[430px] flex items-end justify-center rounded bg-black/5">
          <img src="/src/img/man.png" alt="photo" width="full" />
        </div>
        <div className=" font-medium ">Tom Cruise</div>
        <div className="font-regular">Founder & Chairman</div>
        <div></div>
      </div>
    </section>
  );
};

export default Slider;
