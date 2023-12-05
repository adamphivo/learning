import styles from "./TestComponentHeader.module.scss";

export interface TestComponentHeaderProps {}

export default function TestComponentHeader(props: TestComponentHeaderProps){
    return <div className={styles.wrapper}></div>
}