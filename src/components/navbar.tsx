
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full navbar py-5 px-10 bg-neutral z-50">
      {/* <div className="container"> */}
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="bg-blue-600 btn w-25">
            <Link href="/create" className="text-white">Create Post</Link>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
