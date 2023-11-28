import React from 'react';
import { useAppSelector } from '../hooks/redux';

export function FavoritesPage() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items</p>;
  return (
    <div className=" pt-10 mx-auto h-screen bg-gray-100 rounded-lg shadow-md p-4">
      <ul className="list-decimal">
        {favourites.map((f) => (
          <li className="bg-gray-500 text-white rounded p-2 mb-2" key={f}>
            <a href={f} target="_blank" rel="noreferrer">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
