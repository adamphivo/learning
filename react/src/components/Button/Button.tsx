import styles from "./Button.module.css";

interface Props {
  text: string;
  handle: () => void;
}

export default function Button({ text, handle }: Props) {
  return (
    <button className={styles.button} onClick={handle}>
      {text.toUpperCase()}
    </button>
  );
}
