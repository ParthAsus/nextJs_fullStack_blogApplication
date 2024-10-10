"use client"
import Link from "next/link";
import React, { useRef, useState } from "react";

// interface NavbarProps{
//   setSearch: React.Dispatch<React.SetStateAction<string>>;
// }

const Navbar = () => {
  const [search, setSearch]= useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if(searchRef.current){
      setSearch(searchRef.current.value);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key == "Enter"){
      handleSearch();
    }
  }
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
              ref={searchRef}
              className="input input-bordered w-24 md:w-auto"
              onKeyDown={handleKeyDown}
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
