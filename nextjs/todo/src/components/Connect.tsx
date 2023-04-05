import { useMetaMask } from "metamask-react";
import styles from "./Connect.module.css";

export default function Connect() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing")
    return <div className={styles.button}>init</div>;

  if (status === "unavailable")
    return <div className={styles.button}>Get MetaMask</div>;

  if (status === "notConnected")
    return (
      <button onClick={connect} className={styles.button}>
        Connect
      </button>
    );

  if (status === "connecting")
    return <div className={styles.button}>Connecting</div>;

  if (status === "connected")
    return <div className={styles.button}>Connected</div>;

  return null;
}
