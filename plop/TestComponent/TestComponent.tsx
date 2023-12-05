import styles from "./TestComponent.module.scss";

export interface TestComponentProps {}

export default function TestComponent(props: TestComponentProps) {
  return <div className={styles.wrapper}></div>;
}
