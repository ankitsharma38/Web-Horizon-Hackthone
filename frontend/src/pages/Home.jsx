import React from 'react';
import Hadder from '../components/Hadder';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MailList from '../components/MailList';
import FeaturedProperties from '../components/FeaturedProperties';
import Featured from '../components/Featured';
import PropertyList from '../components/PropertyList';

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hadder />
      <div className="homeContainer max-w-7xl mx-auto p-4 lg:mt-[-140px]">
        <h1 className="homeTitle text-3xl font-bold text-gray-800 my-5 text-center mt-52">Dream Places</h1>

        <Featured />

        <h1 className="homeTitle text-2xl font-bold text-gray-800 my-8 text-center">Browse by property type</h1>
        <PropertyList />

        <h1 className="homeTitle text-3xl font-bold text-gray-800 my-8 text-center">Homes guests love</h1>
        <FeaturedProperties />

        <MailList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
