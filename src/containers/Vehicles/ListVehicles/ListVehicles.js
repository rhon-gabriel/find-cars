import React from "react";
import styles from "./ListVehicles.module.css";
import DisplayError from "../../../components/DisplayMessage/DisplayMessage";

const ListVehicles = ({ vehicles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        {vehicles?.length === 0 && <DisplayError message={"No vehicles found for this model"} />}
        {vehicles?.map(
          ({ make, model, bodyType, fuelType, engineCapacity }, index) => {
            return (
              <div
                className={styles.card}
                key={index}
                data-testid="card-element"
              >
                <h2>{make}</h2>
                <h4>{model}</h4>
                <h5>{bodyType}</h5>
                <h5>{fuelType}</h5>
                <h5>Engine capacity: {engineCapacity}</h5>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ListVehicles;
