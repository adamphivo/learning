import styles from "./test.module.scss";

export interface testProps {}

export default function test(props: testProps){
    return <div className={styles.wrapper}></div>
}