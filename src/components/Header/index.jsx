import React from "react";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <>
    <header className={styles.header}>
      <h1>React-Movie</h1>
      <nav>
        <a href="https://www.linkedin.com/in/aziz-azizli-3ba24a28a/">
          LinkedIn
        </a>
        <a href="https://github.com/AzizzAzizli/">Git Hub</a>
      </nav>
    </header>
    </>
  );
};
