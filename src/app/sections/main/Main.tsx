import styles from "./main.module.css";
import Image from "next/image";
import manEating from "../../../../public/image-man-eating.webp";
import iconEating from "../../../../public/icon-eating.svg";
import iconExercise from "../../../../public/icon-exercise.svg";
import iconSleep from "../../../../public/icon-sleep.svg";
import iconGender from "../../../../public/icon-gender.svg";
import iconAge from "../../../../public/icon-age.svg";
import iconMuscle from "../../../../public/icon-muscle.svg";
import iconPregnancy from "../../../../public/icon-pregnancy.svg";
import iconRace from "../../../../public/icon-race.svg";

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.explanation}>
        <div>
          <Image
            src={manEating}
            alt="Man eating healthy food"
            width={375}
            height={355}
            className={styles.heroImg}
          />
        </div>
        <article className={styles.explanation__article}>
          <h3>What your BMI result means</h3>
          <p>
            A BMI range of 18.5 to 24.9 is considered a &apos;healthy
            weight.&apos; Maintaining a healthy weight may lower your chances of
            experiencing health issues later on, such as obesity and type 2
            diabetes. Aim for a nutritious diet with reduced fat and sugar
            content, incorporating ample fruits and vegetables. Additionally,
            strive for regular physical activity, ideally about 30 minutes daily
            for five days a week.
          </p>
        </article>
      </section>
      <section className={styles.hints}>
        <article className={styles.hints__article}>
          <ul>
            <li>
              <Image
                src={iconEating}
                width={64}
                height={64}
                alt=""
                priority={false}
              />
              <h4>Healthy eating</h4>
              <p>
                Healthy eating promotes weight control, disease prevention,
                better digestion, immunity, mental clarity, and mood.
              </p>
            </li>
            <li>
              <Image
                src={iconExercise}
                width={64}
                height={64}
                alt=""
                priority={false}
              />
              <h4>Regular exercise</h4>
              <p>
                Exercise improves fitness, aids weight control, elevates mood,
                and reduces disease risk, fostering wellness and longevity.
              </p>
            </li>
            <li>
              <Image
                src={iconSleep}
                width={64}
                height={64}
                alt=""
                priority={false}
              />
              <h4>Adequate sleep</h4>
              <p>
                Sleep enhances mental clarity, emotional stability, and physical
                wellness, promoting overall restoration and rejuvenation.
              </p>
            </li>
          </ul>
        </article>
      </section>
      <section className={styles.limitations}>
        <article className={styles.limitations__article}>
          <div className={styles.limitations__legend}>
            <h5>Limitations of BMI</h5>
            <p>
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <ul className={styles.limitations__list}>
            <li>
              <div>
                <Image
                  src={iconGender}
                  width={32}
                  height={32}
                  alt=""
                  priority={false}
                />
                <h6>Gender</h6>
              </div>
              <p>
                The development and body fat composition of girls and boys vary
                with age. Consequently, a child&apos;s age and gender are
                considered when evaluating their BMI.
              </p>
            </li>
            <li>
              <div>
                <Image
                  src={iconAge}
                  width={32}
                  height={32}
                  alt=""
                  priority={false}
                />
                <h6>Age</h6>
              </div>
              <p>
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </p>
            </li>
            <li>
              <div>
                <Image
                  src={iconMuscle}
                  width={32}
                  height={32}
                  alt=""
                  priority={false}
                />
                <h6>Muscle</h6>
              </div>
              <p>
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn&apos;t differentiate muscle from fat.
              </p>
            </li>
            <li>
              <div>
                <Image
                  src={iconPregnancy}
                  width={32}
                  height={32}
                  alt=""
                  priority={false}
                />
                <h6>Pregnancy</h6>
              </div>
              <p>
                Expectant mothers experience weight gain due to their growing
                baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                minimise health risks for both mother and child.
              </p>
            </li>
            <li>
              <div>
                <Image
                  src={iconRace}
                  width={32}
                  height={32}
                  alt=""
                  priority={false}
                />
                <h6>Race</h6>
              </div>
              <p>
                Certain health concerns may affect individuals of some Black and
                Asian origins at lower BMIs than others. To learn more, it is
                advised to discuss this with your GP or practice nurse.
              </p>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
