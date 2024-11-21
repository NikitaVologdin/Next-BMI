import styles from "./limitations.module.css";
import Image from "next/image";
import iconGender from "../../../../public/icon-gender.svg";
import iconAge from "../../../../public/icon-age.svg";
import iconMuscle from "../../../../public/icon-muscle.svg";
import iconPregnancy from "../../../../public/icon-pregnancy.svg";
import iconRace from "../../../../public/icon-race.svg";

export default function Limitations() {
  return (
    <section className={styles.limitations}>
      <article className={styles.limitations__article}>
        <div className={styles.limitations__legend}>
          <h5 className={styles.limitations__heading}>Limitations of BMI</h5>
          <p className={styles.limitations__paragraph}>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <ul className={styles.limitations__list}>
          <li className={styles.list__item}>
            <div className={styles.item__group}>
              <Image
                src={iconGender}
                width={32}
                height={32}
                alt=""
                priority={false}
                className={styles.item__img}
              />
              <h6 className={styles.item__heading}>Gender</h6>
            </div>
            <p className={styles.item__paragraph}>
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child&apos;s age and gender are
              considered when evaluating their BMI.
            </p>
          </li>
          <li className={styles.list__item}>
            <div className={styles.item__group}>
              <Image
                src={iconAge}
                width={32}
                height={32}
                alt=""
                priority={false}
                className={styles.item__img}
              />
              <h6 className={styles.item__heading}>Age</h6>
            </div>
            <p className={styles.item__paragraph}>
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </li>
          <li className={styles.list__item}>
            <div className={styles.item__group}>
              <Image
                src={iconMuscle}
                width={32}
                height={32}
                alt=""
                priority={false}
                className={styles.item__img}
              />
              <h6 className={styles.item__heading}>Muscle</h6>
            </div>
            <p className={styles.item__paragraph}>
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn&apos;t differentiate muscle from fat.
            </p>
          </li>
          <li className={styles.list__item}>
            <div className={styles.item__group}>
              <Image
                src={iconPregnancy}
                width={32}
                height={32}
                alt=""
                priority={false}
                className={styles.item__img}
              />
              <h6 className={styles.item__heading}>Pregnancy</h6>
            </div>
            <p className={styles.item__paragraph}>
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </li>
          <li className={styles.list__item}>
            <div className={styles.item__group}>
              <Image
                src={iconRace}
                width={32}
                height={32}
                alt=""
                priority={false}
                className={styles.item__img}
              />
              <h6 className={styles.item__heading}>Race</h6>
            </div>
            <p className={styles.item__paragraph}>
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
}
