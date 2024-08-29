import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Description from "./components/Description/Description";
import Error from "./Error";
import NavBare from "./components/navbar/NavBare";
import AddMovie from "./components/addmovie/AddMovie";

const home = () => {
  return (
    <div>
      <NavBare />
      <div  style={{display:'flex', justifyContent:'start', margin:'20px'}}>
       
      </div>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<Description />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default home;
