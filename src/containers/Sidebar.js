import React from 'react';

import '../styles/Sidebar.css'

function Sidebar() {
  const categories = ['Funny', 'Sports', 'Girl', 'News', 'Drama', 'Finance', 'Showbiz', 'NSFW']

  return (
    <div className="flex flex-col">
      <div className="sidebar shadow-md rounded-lg mx-2 my-6 flex w-1/2 max-w-xs p-4 bg-white">
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <span className="flex font-semibold text-xl text-black px-4 my-4">Category</span>
          </li>
          {
            categories.map( (category, index) => (
              <li key={index} className="my-px">
                <a href="#"
                  className="flex flex-row items-center h-12 px-2 rounded-lg text-black font-medium hover:bg-gray-100">
                  <span className="ml-3">{category}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="temp sidebar shadow-md rounded-lg mx-2 my-5 flex w-1/2 max-w-xs p-4 bg-white">

      </div>

      <div className="temp sidebar shadow-md rounded-lg mx-2 my-5 flex w-1/2 max-w-xs p-4 bg-white">

      </div>
    </div>
  );
}

export default Sidebar;
