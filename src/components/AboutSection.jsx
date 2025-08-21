import AboutImage from "../assets/image 54.png";

export default function AboutSection() {
  return (
    <>
      <div className="w-full">
        <div className="w-full">
          <img src={AboutImage} className="w-full h-[300px]" />
        </div>
        <div className="pt-14 mb-8">
          <h1 className="text-center text-5xl text-black font-bold size-[36px] w-full">
            Don't squeeze in a sedan when
          </h1>
          <h1 className="text-start pl-[330px] text-5xl text-black font-bold size-[36px] w-full pt-7">
            you could relax in a van.
          </h1>

          <div className="mt-20 w-[1030px] pl-[320px]">
            <h2 className="text-xl text-justify">
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </h2>
          </div>

          <div className="mt-10 w-[1030px] pl-[320px]">
            <h2 className="text-xl text-justify">
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </h2>
          </div>
        </div>

        <div className="mt-20 mb-20 ml-[320px] mr-[320px] w-[720px] h-[300px] bg-[#FFCC8D]">
          <div className="pt-20 ml-10">
            <h2 className="text-2xl font-bold">Your destination is waiting.</h2>
            <h2 className="text-2xl font-bold mt-0.5">Your van is ready.</h2>

            <button className="mt-[30px] w-[200px] h-[50px] rounded-[5px] bg-black text-white font-bold">
              Explore our vans
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
