import Logo from "../../components/logo/Logo";
import styles from "./header.module.css";
import Calculator from "../../components/calculator/Calculator";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <Logo />
        <div className={styles.content}>
          <h1 className={styles.title}>Body Mass Index Calculator</h1>
          <p className={styles.paragraph}>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <Calculator />
      </div>
    </header>
  );
}
