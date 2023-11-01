import {react} from "react";
import Nav from "@/components/nav/nav"
import React from "react";

export function About({ setaboutClicked }) {
  return (
    <div className=" h-screen flex flex-col h-sreeen justify-center items-center w-screen">
   
        <button onClick={() => setaboutClicked(false)}>Close</button>
      <p>About content goes here</p>
      
    </div>
  );
}
