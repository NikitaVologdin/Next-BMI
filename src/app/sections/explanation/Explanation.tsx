import manEating from "../../../../public/image-man-eating.webp";
import styles from "./explanation.module.css";
import Image from "next/image";

export default function Explanation() {
  return (
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
        <h3 className={styles.article__heading}>What your BMI result means</h3>
        <p className={styles.article__paragraph}>
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
  );
}
