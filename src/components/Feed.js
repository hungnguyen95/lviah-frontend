import React from 'react';

function Feed() {
  return (
    <div className="w-full mx-auto px-4 py-4 bg-white shadow-md rounded-lg">
      <div className="py-2 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <a href="#" className="flex flex-col items-start focus:outline-none focus:shadow-outline rounded-lg">
            <p className="ml-2 text-2xl font-medium">This is a title</p>
            <div className="flex flex-row items-center">
              <span className="mx-2 my-2 text-gray-500 text-base font-medium">#hashtag1</span>
              <span className="mx-2 my-2 text-gray-500 text-base font-medium">#hashtag2</span>
            </div>
          </a>
        </div>
        <div className="flex flex-row items-center">
          <img className="rounded-full h-12 w-12 object-cover" src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
          {/* <p className="text-xs font-semibold text-gray-500">2 hours ago</p> */}
        </div>
      </div>
      <div className="mt-2">
        <img className="object-cover w-full rounded-lg" src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80" alt="" />
        <div className="py-2 flex flex-row items-center">
          <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
            <svg fill="gray" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-5 h-5" fillRule="evenodd" clipRule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
            <span className="text-base text-gray-600">1.3k</span>
          </button>
          <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
            <svg fill="gray" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-5 h-5" fillRule="evenodd" clipRule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
            <span className="text-base text-gray-600">121</span>
          </button>
          <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-7 h-7"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            <span className="ml-1 text-base text-gray-600">73 comments</span>
          </button>
        </div>
      </div>
      {/* <div className="py-2">
        <p className="leading-snug">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ratione dicta deleniti, quas distinctio, veniam quo rem eveniet aliquid repudiandae fuga asperiores reiciendis tenetur? Eius quidem impedit et soluta accusamus.</p>
      </div> */}
    </div>
  );
}

export default Feed;