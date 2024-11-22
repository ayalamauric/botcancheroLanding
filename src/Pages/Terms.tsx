import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-gray-600">
          Welcome to our Terms and Conditions page. Here we explain the rules
          and policies of using our platform.
        </p>
        {/* Add more terms content here */}
      </main>
      <Footer />
    </div>
  );
}

export default Terms;