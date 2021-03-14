import React from 'react';

// Import CSS
import '../styles/Leaderboard.css';

function Person(props) {
  return (
    <div className="py-2 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <a href="#" className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
          <img className="rounded-full h-16 w-16 object-cover" src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
          <div className="flex flex-col">
            <p className="ml-2 text-base font-medium">Steve Jobs</p>
            <p className="ml-2 text-sm text-gray-500 font-medium">1000 reputations</p>
          </div>
        </a>
      </div>
      <div className="flex flex-row items-center">
        <div className="hexagon"><span></span></div>
        { props.isUpvote ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="uprank mx-2" viewBox="0 0 24 24">
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="downrank mx-2" viewBox="0 0 24 24">
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
          </svg>
        )
      }
        {/* <p className="text-xs font-semibold text-gray-500">2 hours ago</p> */}
      </div>
    </div>
  );
}

function Leaderboard() {
  return (
    <div className="col-start-4 grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
      <div className="sidebar shadow-md rounded-lg mx-2 my-2 flex flex-col w-full p-4 bg-white">
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <span className="flex justify-center font-semibold text-xl text-black px-4 my-4">Week Leaderboard</span>
          </li>
          {/* {
            categories.map( (category, index) => (
              <li key={index} className="my-px">
                <a href="#"
                  className="flex flex-row items-center h-12 px-2 rounded-lg text-black font-medium hover:bg-gray-100">
                  <span className="ml-3">{category}</span>
                </a>
              </li>
            ))
          } */}
        </ul>
        <Person isUpvote/>
        <Person />
        <Person />
      </div>
    </div>
  );
}

export default Leaderboard;