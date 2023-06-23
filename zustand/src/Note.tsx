import type { INote } from "./stores/user";
import { useNotes } from "./stores/user";
import { useState, useEffect } from "react";

interface Props {
  note: INote;
}

export default function Note({ note }: Props) {
  const removeNote = useNotes((state) => state.removeNote);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <li key={note.id}>
      <div>
        <p>title {note.title}</p>
        Notes {note.id} : {note.body}
      </div>
      <button onClick={() => removeNote(note)}>Delete</button>
      {isLoading && <div>Loading</div>}
    </li>
  );
}
