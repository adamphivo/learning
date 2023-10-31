import styles from "./page.module.css";
import Hello from "@/components/Hello";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hello />
    </main>
  );
}
