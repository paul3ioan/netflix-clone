import React from 'react';
import Navbar from '../../components/navbar';

const Home = (): JSX.Element => {
  return (
    <div className="h-screen overflow-hidden relative flex flex-col">
      <img className="object-cover opacity-60 absolute" src="assets/login-page/background.jpg" alt="background" />;
      <Navbar />
    </div>
  );
};

export default Home;
// Change Your Whole Panda.
