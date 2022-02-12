import React, { useEffect, useState } from "react";
import * as actions from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Main.module.css";
import DropdownSelect from "../../components/DropdownSelect/DropdownSelect";

const Main = () => {
  const dispatch = useDispatch();
  const { models, loadingModels, errorModels } = useSelector(
    (state) => state.cars
  );

  useEffect(() => {
    dispatch(actions.getModels());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("models", models);

  const data = ["ALFA ROMEO", "AUDI", "AUSTIN", "BARKAS", "BMW"];
  return (
    <div className={styles.container}>
      <section className={styles.columns}>
        <div className={styles.column}>
          <DropdownSelect
            name="By Manufacturer"
            tabIndex={0}
            data={data}
            error={errorModels}
          />
        </div>

        <div className={styles.column}>
          <DropdownSelect
            name="By Model"
            tabIndex={1}
            data={models}
            error={errorModels}
          />
        </div>

        <div className={styles.column}>
          <DropdownSelect
            name="By Body Type"
            tabIndex={2}
            data={data}
            error={errorModels}
          />
        </div>
      </section>
    </div>
  );
};

export default Main;
