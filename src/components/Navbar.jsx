import { Link } from "react-router-dom";

// const navigation = navigation();

export default function () {
  // const handleHomeNavigation = () => {
  //   navigation("/HomePage");
  // };
  return (
    <>
      <div className="flex justify-between items-center bg-[#FFF7ED] h-[62px] w-full px-10">
        <Link to={"/"}>
          <h2 className="font-extrabold text-3xl">#VANLIFE</h2>
        </Link>

        <nav className="flex space-x-7">
          <Link to={"/aboutPage"} className="hover:underline font-bold">
            About
          </Link>
          <Link className="hover:underline font-bold">Vans</Link>
        </nav>
      </div>
    </>
  );
}
