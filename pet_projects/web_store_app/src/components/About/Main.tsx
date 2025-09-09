const Main = () => {
  return (
    <section
      className="flex flex-col mb-6 
     md:flex-row mb:"
    >
      <div className="mb-6 md:relative md:w-1/2">
        <h1 className="font-semibold text-5xl mb-10">Our Stroy</h1>
        <div className="text-justify">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
          <span className="block mb-6"></span>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </div>
      </div>

      <img
        src="./src/img/about/main_about.jpg"
        alt="about"
        className="rounded md:w-1/2 md:absolute md:right-0"
      />
    </section>
  );
};

export default Main;
