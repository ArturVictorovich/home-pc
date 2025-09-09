import Slider from './Slider';
import Main from './Main';
import Cards from './Cards';
const About = () => {
  return (
    <div className="p-4">
      <div className="text-3.25 mb-10.5">
        <button className="text-black/50 mr-1 cursor-pointer">Home</button>
        <span className="text-black/50 mr-1 ">/</span>
        <button className="cursor-pointer">About</button>
      </div>
      {/* main text */}
      <Main />
      {/* карточки */}
      <Cards />
      {/* слайдер */}
      <Slider />
    </div>
  );
};

export default About;
