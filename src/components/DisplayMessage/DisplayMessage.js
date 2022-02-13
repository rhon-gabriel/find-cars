import React from "react";
import styles from "./DisplayMessage.module.css";

const DisplayMessage = ({ message, error }) => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className={`${styles.card} ${error && styles.error}`} data-testid="display-message">
      <p>{message}</p>
      {error && (
        <button type="text" onClick={refreshPage}>
          Reload
        </button>
      )}
    </div>
  );
};

export default DisplayMessage;
