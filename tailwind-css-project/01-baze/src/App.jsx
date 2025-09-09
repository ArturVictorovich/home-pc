import React from 'react';

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-7xl font-bold mt-8">Hello, Tailwind</h1>
      <button
        className=" border-1 rounded
       border-solid block m-10 mx-auto  hover:bg-red-500 cursor-pointer transition-colors ease-in-out duration-300"
      >
        жми на меня
      </button>
      <div className="h-14 w-30 mx-auto bg-blue-600 text-amber-200 text-center block">
        {' '}
        Text tex text
      </div>
      <div className="flex justify-between gap-3">
        <div className="bg-amber-600 w-20 h-20 m-1 " />
        <div className="bg-amber-600 w-20 h-20 m-1" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-amber-600 h-12 w-12" />
        <div className="bg-amber-600 h-12 w-12" />
      </div>
      {1 && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex item-center justify-center">
          <div className="bg-white/80 text-black rounded w-1/2 p-5">
            {' '}
            <h2>Модально окно</h2>
            <p>просто текст модального окна</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
