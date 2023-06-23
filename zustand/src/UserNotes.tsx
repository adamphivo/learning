import { useState } from "react";
import { useNotes } from "./stores/user";
import { v4 as uuidv4 } from "uuid";
import { NoteSchema } from "./stores/user";
import { ZodError } from "zod";
import { shallow } from "zustand/shallow";
import Note from "./Note";

export default function UserNotes() {
  const [notes, addNote] = useNotes((state) => [state.notes, state.addNote], shallow);
  const [currentNote, setCurrentNote] = useState<string>("");
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const [error, setError] = useState<ZodError | null>(null);

  function handleClick() {
    try {
      const uuid = uuidv4();
      const input = NoteSchema.parse({ id: uuid, body: currentNote, title: currentTitle });
      addNote(input);
    } catch (e) {
      if (e instanceof ZodError) {
        setError(e);
      }
    }
  }

  const notesElements = notes.map((note) => <Note note={note}></Note>);

  return (
    <>
      <h2>Notes</h2>
      {error && (
        <ul>
          {error.issues.map((error, index) => (
            <li key={index}>{error.message}</li>
          ))}
        </ul>
      )}
      <ul>{notesElements}</ul>

      {/* Form */}
      <div>
        <div>
          <input type="text" onChange={(e) => setCurrentNote(e.target.value)}></input>
        </div>
        <div>
          <input type="text" onChange={(e) => setCurrentTitle(e.target.value)}></input>
        </div>
        <div>
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </>
  );
}
