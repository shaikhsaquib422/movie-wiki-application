import React, { useContext, useState } from "react";
import Movies from "./Movies";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      <Movies />
    </div>
  );
};

export default Home;
