import NotesForm from "./components/notesform";
import NotesView from "./components/notesView";

function App() {
  return (
    <>
      <div
        className={
          "flex flex-col items-center w-screen h-screen bg-primary text-white"
        }
      >
        <h1 className="text-text text-7xl flex items-center h-36">
          Small React notes app!
        </h1>
        <NotesForm />
        <NotesView />
      </div>
    </>
  );
}

export default App;
