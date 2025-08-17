import BodyImage from "../assets/image 53.png";

export default function BodySection() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${BodyImage})` }}
        className="bg-cover bg-center w-full h-[420px]"
      >
        <div className="pt-14 mt-8 mb-8">
          <h1 className="text-center text-6xl text-white font-extrabold size-[36px] w-full">
            You got travel plans, we
          </h1>
          <h1 className="pl-[330px] text-6xl text-white font-extrabold size-[36px] w-full pt-7">
            got the travel vans
          </h1>

          <h1 className="pl-[160px] text-lg text-center text-white pt-[84px] max-w-[1000px]">
            Add adventure to your life by joining the #vanlife movement.
          </h1>
          <h1 className="pl-[80px] text-lg text-center text-white pt-2 max-w-[1000px]">
            Rent the perfect van to make your perfect road trip.
          </h1>

          <div className="flex items-center justify-center rounded-[10px] ml-[340px] mt-14 w-[700px] h-[50px] font-bold text-white bg-amber-600">
            <button className="">Find your van</button>
          </div>
        </div>
      </section>
    </>
  );
}
