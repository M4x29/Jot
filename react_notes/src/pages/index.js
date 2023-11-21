// index.js
import React, { useState } from "react";
import NotesForm from "@/components/notesform";
import { About } from "@/components/about/about";
import Link from "next/link";

export default function App() {
  return (
    <>
      <div
        id="container"
        className={
          "flex flex-col items-center w-screen h-screen bg-1 text-white "
        }
      >
        <div className="h-full w-full bg-transparent"></div>
        <NotesForm className="" />
        <div className="h-full"></div>
      </div>
    </>
  );
}
