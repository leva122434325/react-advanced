import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export function Navigation({}: Props) {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <Link to="/" className="font-bold ">
        Githab search
      </Link>
      <span>
        <Link to="/" className=" m-5">
          Home
        </Link>
        <Link to="/favorites">Favorites</Link>
      </span>
    </nav>
  );
}
