import React from "react";
import styles from "./Main.module.css";
import DropdownSelect from "../../components/DropdownSelect/DropdownSelect";

const Main = () => {
  const data = ["ALFA ROMEO", "AUDI", "AUSTIN", "BARKAS", "BMW"];
  return (
    <div className={styles.container}>
      <section className={styles.columns}>
        <div className={styles.column}>
          <DropdownSelect name="By manufacturer" tabIndex={0} data={data}/>
        </div>

        <div className={styles.column}>
          <DropdownSelect name="By model" tabIndex={1}  data={data}/>
        </div>

        <div className={styles.column}>
          <DropdownSelect name="By body type" tabIndex={2}  data={data}/>
        </div>
      </section>
    </div>
  );
};

export default Main;
