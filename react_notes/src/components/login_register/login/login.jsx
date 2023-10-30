import React, { useEffect } from "react";
import App from "@/pages/index";
import NotesForm from "@/components/notesform";

export default function Login({ setloginButtonClicked }) {
  return (
    <div className="absolute w-1/2 ">
      <div className="flex flex-col h-2/3 bg-blue-400 rounded-md justify-evenly">
        <div className="flex flex-row w-full">
          <button onClick={() => setloginButtonClicked(false)}>
            or continue anonymously
          </button>
          <h1 className="w-full flex justify-center text-4xl bold">Login</h1>
          {/* {loginButtonClicked ? <Login /> : null} */}
        </div>
      </div>
    </div>
  );
}
