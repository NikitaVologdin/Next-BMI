import styles from "./main.module.css";
import Explanation from "../explanation/Explanation";
import Hints from "../hints/Hints";
import Limitations from "../limitations/Limitations";
import Image from "next/image";
import curveRight from "../../../../public/curve-right.webp";
import curveLeft from "../../../../public/curve-left.webp";

export default function Main() {
  return (
    <main className={styles.main}>
      <Image
        src={curveRight}
        alt=""
        width={87}
        height={202}
        className={styles.curved__right}
      />
      <Explanation />
      <Hints />
      <Image
        src={curveLeft}
        alt=""
        width={94}
        height={122}
        className={styles.curved__left}
      />
      <Limitations />
    </main>
  );
}
