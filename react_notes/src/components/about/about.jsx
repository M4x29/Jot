import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export function About({ clicked, setaboutClicked }) {
  return (
    <div className=" w-1/2 h-fit  top-2 flex flex-col items-center justify-center z-30">
      <div className="flex flex-col h-2/3 bg-slate-800 w-full ">
        <button
          onClick={() => setaboutClicked(false)}
          className="hover:text-green-300 w-fit h-fit flex justify-start text-xl p-5 items-center hover:border-s-2 border-green-400 "
        >
          <AiOutlineClose />
        </button>

        <section className="flex flex-col justify-center text-md md:text-xl lg:text-xl  w-full gap-5 p-8">
          {" "}
          {/* tror egt ikke section taggen er nødvendig, men nå er den her:)*/}
          <h1 className="justify-center text-3xl md:text-4xl lg:text-6xl bold w-full ">
            About us
          </h1>
          <div className="w-3/4 flex flex-col gap-3">
            <p className="">
              This is a simple note taking app. By default, it stores your notes
              in localstorage.
            </p>
            <div className=""></div>
            <p>
              If you want to use synchronization across devices you have to
              create an account.{" "}
            </p>
            <p>
              Create a note by writing a title for your note, the content of
              your note and click the save button{" "}
            </p>
          </div>
          <div className="h-8"></div>
          <div className="w-full flex justify-start ">
            <button
              className="rounded-md w-1/5 h-16 bg-purple-500 flex justify-center items-center "
              onClick={() => setaboutClicked(false)}
            >
              Get started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// export function About({ setaboutClicked }) {
//   const [Display, setDisplay] = useState(true);

//   useEffect(() => {
//     setaboutClicked(true);
//     setDisplay(true);
//     return () => {
//       setaboutClicked(false);
//     };
//   }, [setaboutClicked]);

//   return (
//     <div>
//       <p>Display State: {Display.toString()}</p>
//       <button onClick={() => setDisplay(false)}>Toggle Display</button>
//     </div>
//   );
// }
