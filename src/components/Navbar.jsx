import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="flex justify-between items-center bg-[#FFF7ED] h-[62px] w-full px-10">
        <h2 className="font-extrabold text-3xl">#VANLIFE</h2>
        <nav className="flex space-x-7">
          <Link className="hover:underline font-bold">About</Link>
          <Link className="hover:underline font-bold">Vans</Link>
        </nav>
      </div>
    </>
  );
}
