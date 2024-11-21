import styles from "./hints.module.css";
import Image from "next/image";
import iconEating from "../../../../public/icon-eating.svg";
import iconExercise from "../../../../public/icon-exercise.svg";
import iconSleep from "../../../../public/icon-sleep.svg";

export default function Hints() {
  return (
    <section className={styles.hints}>
      <article className={styles.hints__article}>
        <ul className={styles.hints__list}>
          <li className={styles.hints__item}>
            <Image
              src={iconEating}
              width={64}
              height={64}
              alt=""
              priority={false}
              className={styles.item__img}
            />
            <h4 className={styles.item__heading}>Healthy eating</h4>
            <p className={styles.item__paragraph}>
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </li>
          <li className={styles.hints__item}>
            <Image
              src={iconExercise}
              width={64}
              height={64}
              alt=""
              priority={false}
              className={styles.item__img}
            />
            <h4 className={styles.item__heading}>Regular exercise</h4>
            <p className={styles.item__paragraph}>
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </li>
          <li className={styles.hints__item}>
            <Image
              src={iconSleep}
              width={64}
              height={64}
              alt=""
              priority={false}
              className={styles.item__img}
            />
            <h4 className={styles.item__heading}>Adequate sleep</h4>
            <p className={styles.item__paragraph}>
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
}
