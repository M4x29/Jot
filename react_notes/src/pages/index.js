import React from "react";
import NotesForm from "@/components/notesform";
import Login from "@/components/login_register/login/login";

import { useState } from "react";
import { About } from "@/components/about/about";

export default function App() {
  const [loginButtonclicked, setloginButtonClicked] = useState(false);
  const [aboutClicked, setaboutClicked] = useState(false);

  return (
    <>
      <div
        className={
          "flex flex-col  items-center w-screen h-screen bg-primary text-white"
        }
      >
        <nav className="flex flex-row  w-full h-16 justify-center items-center bg-transparent/90">
          <button className="bg-red-400" onClick={() => setaboutClicked(true)}>
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
        <div className="flex h-full w-full justify-center items-center">
          {aboutClicked ? <About setaboutClicked={setaboutClicked} /> : null}
        </div>
        {loginButtonclicked ? (
          <Login setloginButtonClicked={setloginButtonClicked} />
        ) : (
          <NotesForm />
        )}
      </div>
    </>
  );
}
