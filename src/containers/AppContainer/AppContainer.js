import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from "./AppContainer.module.css";

const AppContainer = () => {
  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
};

export default AppContainer;
