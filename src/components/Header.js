import React from "react";

function Header() {
  return (
    <header className="container bg-black text-white flex justify-between items-center ">
      <div>
        <h2 className="font-extrabold text-lg ">CINEZONE</h2>
      </div>
      <ul className="flex ">
        <li className="hover:text-yellow-400 px-4">Movies</li>
        <li className="hover:text-yellow-400">TV Shows</li>
      </ul>
    </header>
  );
}

export default Header;
