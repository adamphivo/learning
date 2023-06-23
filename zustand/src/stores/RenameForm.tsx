import { useState } from "react";
import { useUser } from "./user";

export default function RenameForm() {
  const { username, rename } = useUser();
  const [input, setInput] = useState<string>(username);

  return (
    <>
      <h3>Rename form</h3>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => rename(input)}>Rename</button>
    </>
  );
}
