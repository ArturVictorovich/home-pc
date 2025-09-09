import React from 'react';

const App = () => {
  return (
    <div className=" h-max flex justify-center flex-col">
      <h1 className="text-red-600 text-3xl">Hello world from Tailwind</h1>
      <input
        type="search"
        placeholder="input"
        className="outline-0   border-solid border-2 border-transparent focus:border-green-500"
      />
      <button className="rounded bg-green-400 hover:bg-green-300 cursor-pointer transition-colors ease-in-out duration-500 mt-10 mx-auto px-2 border border-white/50 border-solid ">
        {' '}
        Click me!
      </button>

      <div
        className="mt-10 mx-auto h-30 flex justify-center rounded text-orange-600 text-shadow-2xs shadow font-bold p-2  bg-green-600
      md:bg-purple-500 transition duration-500
      lg:bg-blue-600
      "
      >
        Adaptive
      </div>
      <div className="dark:bg-gray-900">Dark them</div>
      <div>
        <iframe
          className="w-full h-full aspect-video"
          src="https://rutube.ru/video/42ad34270a7378e7ba9a87331eeec0a1/?r=wd"
        />
      </div>
    </div>
  );
};

export default App;
