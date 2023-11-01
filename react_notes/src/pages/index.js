import React from "react";
import NotesForm from "@/components/notesform";
import Login from "@/components/login_register/login/login";
import Nav from "@/components/nav/nav"
import { useState } from "react";

function App() {
  const [loginButtonclicked, setloginButtonClicked] =useState(false);
  return (
    <>
      <div
        className={
          "flex flex-col  items-center w-screen h-full bg-primary text-white"
        }
      >
        <Nav setloginButtonClicked={setloginButtonClicked}/>

        {loginButtonclicked ? (
          <Login setloginButtonClicked={setloginButtonClicked} />
        ) : (
          <NotesForm />
        )}
      </div>
    </>
  );
}
export default App;
