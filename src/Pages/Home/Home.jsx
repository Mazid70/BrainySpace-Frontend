import React from 'react';
import NavBar from '../../Components/NavBar';
import Banner from './Components/Banner';
import Card from './Components/Card';

const Home = () => {
  return (
    <main className="bg-black min-h-screen">
      <NavBar />
      <div className="container mx-auto">
        <Banner />
        <Card />
      </div>
    </main>
  );
};

export default Home;
