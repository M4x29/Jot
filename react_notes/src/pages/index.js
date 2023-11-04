// index.js

import React, { useState } from "react";
import NotesForm from "@/components/notesform";
import Login from "@/components/login_register/login/login";
import { About } from "@/components/about/about";

export default function App() {
  const [loginButtonclicked, setloginButtonClicked] = useState(false);
  const [aboutClicked, setaboutClicked] = useState(false);

  const handleBackdropClick = () => {
    setaboutClicked(false);
  };

  return (
    <>
      <div
        className={
          "flex flex-col items-center w-screen h-screen bg-primary text-white"
        }
      >
        <div className="h-full w-full bg-transparent/10">
          <nav className="flex flex-row w-full h-16 justify-center items-center">
            <button
              className="bg-red-400"
              onClick={() => setaboutClicked(true)}
            >
              About
            </button>

            <div className="spacer w-4/5"></div>
            <div className="flex flex-col">
              <div> not signed in?</div>
              <button
                onClick={() => setloginButtonClicked(true)}
                className="hover:text-green-400"
              >
                log in, or create account
              </button>
            </div>
          </nav>
          {aboutClicked && (
            <div
              className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 ${
                aboutClicked ? "backdrop-blur-md" : ""
              }`}
              onClick={handleBackdropClick}
            ></div>
          )}
          {aboutClicked ? (
            <div className="w-screen h-screen flex justify-center items-centers bg-red-300">
              <About setaboutClicked={setaboutClicked} className="" />
            </div>
          ) : null}
        </div>
        <NotesForm />
        {loginButtonclicked ? (
          <Login setloginButtonClicked={setloginButtonClicked} />
        ) : null}
      </div>
    </>
  );
}
