import image from "../../assets/about.png"
const Portfolio = () => {


  return (
    <section className="relative bg-[#0d0d0d] text-white py-20">
      {/* Sticky heading - only visible inside this section */}
      <div className="sticky top-20 z-10 pointer-events-none select-none text-center">
        <h1 className="text-6xl md:text-[180px] font-bold text-gray-300 opacity-10 whitespace-nowrap">
          Portfolio
        </h1>
      </div>
      <div className="container px-6">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-[100px]">
          <div className="">
            <img className="w-[433px] h-[635px]" src={image} />
            <div className="flex gap-2 mt-4 align-middle">
              <div className="w-2 h-2 rounded-full bg-lime-500"></div>
              <p className="">Commercial Video</p>
            </div>
          </div>
          <div className="mt-20">
            <img className="w-[433px] h-[635px]" src={image} />
            <div className="flex gap-2 mt-4 align-middle">
              <div className="w-2 h-2 rounded-full bg-lime-500"></div>
              <p className="">Corporate Video</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src="" />
        </div>
      </div>

    </section>
  );
};

export default Portfolio;
