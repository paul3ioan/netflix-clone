import React from 'react';

const Navbar = (): JSX.Element => {
  return (
    <section className=" w-full py-5 px-10 flex justify-between">
      <img className="rounded-xl object-cover w-52" src="assets/login-page/big-logo.jpg" alt="big-logo" />
      <nav className="flex gap-3">
        <button className="text-color-red-500 py-3 px-5 backdrop-blur-sm bg-white" type="button">
          Lol
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
