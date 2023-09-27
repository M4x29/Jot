import NotesForm from "./components/notesform";

function App() {
  return (
    <>
      <div
        className={
          "flex flex-col  items-center w-screen h-full bg-primary text-white"
        }
      >
        <h1 className="text-slate-50 text-7xl flex items-center h-36">
          Small React notes app
        </h1>
        <NotesForm />
      </div>
    </>
  );
}

export default App;
