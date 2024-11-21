import logo from "../../../../public/logo.svg";
import Image from "next/image";
import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src={logo}
        alt=""
        width={40}
        height={40}
        priority={true}
        className={styles.logoImg}
      />
    </div>
  );
}
