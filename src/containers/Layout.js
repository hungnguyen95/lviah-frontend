import React from 'react';

// Import components
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

function Layout() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 grid grid-cols-4">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default Layout;