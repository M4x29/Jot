function NotesForm() {
    return (
        <div className="w-1/2 h-3/4 bg-red-400 m-0 flex flex-col gap-3">
            <h1 className={"text-4xl text-white w-full flex justify-center items-center"}>Notes</h1>
            <form className="flex flex-col">
                <input className="w-full h-12 bg-amber-300 flex justify-center items-center" type="text"
                       placeholder="     title"
                       name="title"/>
                <textarea className="text-black" name="note" id="" cols="30" rows="10" placeholder="note"></textarea>
                <button className="bg-fuchsia-400" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NotesForm;