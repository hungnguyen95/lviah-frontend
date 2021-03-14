import React from 'react';

// Import components
import Feed from '../components/Feed'

function Content() {
  return (
    <div className="col-start-2 col-span-2 grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
      <Feed />
      <Feed />
      <Feed />
    </div>
  );
}

export default Content;