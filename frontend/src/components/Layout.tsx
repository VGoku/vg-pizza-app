import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              VG Pizza App
            </h1>
            <div className="space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/menu" className="text-gray-700 hover:text-gray-900">Menu</Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout; 