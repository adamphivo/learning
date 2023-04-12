import { useState } from "react";

interface Props {
  handleAdd: (text: string) => void;
}

export default function AddTask(props: Props) {
  const [text, setText] = useState<string>("");

  return (
    <div>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setText("");
          props.handleAdd(text);
        }}
      >
        Add
      </button>
    </div>
  );
}
