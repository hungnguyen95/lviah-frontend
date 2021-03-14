import React from 'react';

// Import components
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Leaderboard from '../components/Leaderboard';

function Layout() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 grid grid-cols-4">
        <Sidebar />
        <Content />
        <Leaderboard />
      </div>
    </>
  );
}

export default Layout;