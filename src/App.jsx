import React from "react";
import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMovie from "./SingleMovie";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
