import React from "react";
import NotesForm from "@/components/notesform";
import Login from "@/components/login_register/login/login";

function App() {
  const [loginButtonclicked, setloginButtonClicked] = React.useState(false);

  return (
    <>
      <div
        className={
          "flex flex-col  items-center w-screen h-full bg-primary text-white"
        }
      >
        <nav className="flex flex-row  w-full h-16 justify-center items-center">
          <div>About</div>
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
