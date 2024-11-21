"use client";
import { useState, useEffect, ChangeEvent } from "react";
import styles from "./calculator.module.css";

type TSystem = "metric" | "imperial";

export default function Calculator() {
  const [system, setSystem] = useState<TSystem>("metric");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [ft, setFt] = useState(0);
  const [inc, setInc] = useState(0);
  const [st, setSt] = useState(0);
  const [lbs, setLbs] = useState(0);
  const [bmiDescription, setBmiDescription] = useState("");
  const [idealWheight, setIdealWheight] = useState("");

  function metricHandler() {
    setSystem("metric");
  }
  function imperialHandler() {
    setSystem("imperial");
  }
  function kgHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = +event.target.value;
    setWeight(value);
  }
  function cmHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = +event.target.value;
    setHeight(value);
  }

  function ftHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = +event.target.value;
    setFt(value);
  }
  function incHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = +event.target.value;
    setInc(value);
  }

  useEffect(() => {
    function ftInToM(feet: number, inches: number) {
      const feetToMeters = feet * 0.3048;
      const inchesToMeters = inches * 0.0254;
      const totalMeters = feetToMeters + inchesToMeters;
      return +totalMeters.toFixed(2) * 100;
    }
    if (ft && inc) {
      setHeight(ftInToM(ft, inc));
    }
  }, [ft, inc]);

  function stHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = +event.target.value;
    setSt(value);
  }
  function lbsHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = +event.target.value;
    setLbs(value);
  }

  useEffect(() => {
    function stLbToKg(stones: number, pounds: number) {
      const stonesToKg = stones * 6.3503;
      const poundsToKg = pounds * 0.453592;
      const totalKg = stonesToKg + poundsToKg;
      return Math.round(+totalKg);
    }
    if (st && lbs) {
      setWeight(stLbToKg(st, lbs));
    }
  }, [st, lbs]);

  useEffect(() => {
    function calculateBmi() {
      const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
      return bmi;
    }
    if (!height && !weight) return setBmi("0");
    if (height == 0 || weight == 0) return setBmi("0");
    return setBmi(calculateBmi());
  }, [height, weight]);

  useEffect(() => {
    function bmiResult(value: number) {
      const bmiCategories = [
        { min: 0, max: 18.4, category: "underweight" },
        { min: 18.5, max: 24.9, category: "healthy weight" },
        { min: 25, max: 29.9, category: "overweight" },
        { min: 30, max: 39.9, category: "obese" },
        { min: 40, max: Infinity, category: "severely obese" },
      ];

      for (const category of bmiCategories) {
        if (value >= category.min && value <= category.max) {
          return `You're in the ${category.category} range`;
        }
      }

      return "";
    }
    function getIdealWheight(height: number) {
      function kgToLbs(kg: number) {
        const lbs = kg * 2.20462;
        return Math.floor(lbs);
      }
      const heightCategories = [
        { height: 150, min: 43, max: 58 },
        { height: 155, min: 46, max: 62 },
        { height: 160, min: 49, max: 67 },
        { height: 165, min: 52, max: 72 },
        { height: 170, min: 56, max: 78 },
        { height: 175, min: 60, max: 84 },
        { height: 180, min: 64, max: 90 },
        { height: 185, min: 68, max: 97 },
        { height: 190, min: 73, max: 103 },
        { height: 195, min: 78, max: 108 },
        { height: 200, min: 83, max: 113 },
        { height: 205, min: 88, max: 121 },
      ];
      for (const category of heightCategories) {
        if (height - category.height < 5) {
          if (system === "metric") {
            return `${category.min}kgs – ${category.max}kgs`;
          } else {
            return `${kgToLbs(category.min)}lbs – ${kgToLbs(category.max)}lbs`;
          }
        }
      }
      return "Never seen such tall people";
    }
    if (bmi) {
      const result = bmiResult(+bmi);
      const ideal = getIdealWheight(height);
      setBmiDescription(result);
      setIdealWheight(ideal);
    }
    return;
  }, [bmi, height, system]);

  return (
    <section
      className={`${styles.calculator} ${
        system === "metric" ? styles.metric : styles.imperial
      }`}
    >
      <form action="">
        <h2 className={styles.title}>Enter your details below</h2>
        <fieldset className={styles.system}>
          <div className={styles.radio__control}>
            <input
              type="radio"
              id="metric"
              name="system"
              value="metric"
              aria-labelledby="metric"
              checked={system === "metric"}
              onChange={metricHandler}
              className={styles.radio__input}
            />
            <label htmlFor="metric" className={styles.radio__label}>
              Metric
            </label>
          </div>
          <div className={styles.radio__control}>
            <input
              type="radio"
              id="imperial"
              name="system"
              value="imperial"
              aria-labelledby="imperial"
              checked={system === "imperial"}
              onChange={imperialHandler}
              className={styles.radio__input}
            />
            <label htmlFor="imperial" className={styles.radio__label}>
              Imperial
            </label>
          </div>
        </fieldset>
        <fieldset className={styles.data}>
          <div className={`${styles.input__control} ${styles.control__metric}`}>
            <label htmlFor="height" className={styles.label}>
              Height
            </label>
            <input
              type="number"
              id="height"
              name="height"
              aria-labelledby="height"
              placeholder="0"
              className={`${styles.cm} ${styles.input}`}
              onChange={cmHandler}
            />
          </div>
          <div className={`${styles.input__control} ${styles.control__metric}`}>
            <label htmlFor="weight" className={styles.label}>
              Weight
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              aria-labelledby="weight"
              placeholder="0"
              className={`${styles.kg} ${styles.input}`}
              onChange={kgHandler}
            />
          </div>
          <div
            className={`${styles.input__control} ${styles.control__imperial}`}
          >
            <label id="height" className={styles.label}>
              Height
            </label>
            <div className={styles.height}>
              <input
                type="number"
                name="ft"
                aria-labelledby="height"
                placeholder="0"
                className={`${styles.ft} ${styles.input}`}
                onChange={ftHandler}
              />
              <input
                type="number"
                name="in"
                aria-labelledby="height"
                placeholder="0"
                className={`${styles.in} ${styles.input}`}
                onChange={incHandler}
              />
            </div>
          </div>
          <div
            className={`${styles.input__control} ${styles.control__imperial}`}
          >
            <label htmlFor="weight" id="weight" className={styles.label}>
              Weight
            </label>
            <div className={styles.width}>
              <input
                type="number"
                name="st"
                aria-labelledby="weight"
                placeholder="0"
                className={`${styles.st} ${styles.input}`}
                onChange={stHandler}
              />
              <input
                type="number"
                name="lbs"
                aria-labelledby="weight"
                placeholder="0"
                className={`${styles.lbs} ${styles.input}`}
                onChange={lbsHandler}
              />
            </div>
          </div>
        </fieldset>
        <div className={styles.result}>
          {bmi !== "0" ? (
            <div className={styles.result__bmi}>
              <strong className={styles.strong}>Your BMI is...</strong>
              <output className={styles.output}>{bmi}</output>
              <p className={styles.paragraph}>
                Your BMI suggests you’re a {bmiDescription}. Your ideal weight
                is between <span className={styles.ideal}>{idealWheight}</span>.
              </p>
            </div>
          ) : (
            <div className={styles.result__welcome}>
              <h2 className={styles.welcome__heading}>Welcome!</h2>
              <p className={styles.welcome__paragraph}>
                Enter your height and weight and you’ll see your BMI result here
              </p>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
