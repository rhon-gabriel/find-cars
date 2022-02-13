import React from "react";
import styles from "./ListVehicles.module.css";

const ListVehicles = ({ vehicles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        {vehicles?.length === 0 && <p>No vehicles found for this model</p>}
        {vehicles?.map(
          ({ make, model, bodyType, fuelType, engineCapacity }, index) => {
            return (
              <div className={styles.card} key={index}>
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
