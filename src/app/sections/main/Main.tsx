import styles from "./main.module.css";
import Explanation from "../explanation/Explanation";
import Hints from "../hints/Hints";
import Limitations from "../limitations/Limitations";

export default function Main() {
  return (
    <main className={styles.main}>
      <Explanation />
      <Hints />
      <Limitations />
    </main>
  );
}
