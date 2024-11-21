import styles from "./main.module.css";
import Explanation from "../explanation/Explanation";
import Hints from "../hints/Hints";
import Limitations from "../limitations/Limitations";

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.curved__right}></div>
      <Explanation />
      <Hints />
      <div className={styles.curved__left}></div>
      <Limitations />
    </main>
  );
}
