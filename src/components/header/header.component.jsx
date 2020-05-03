import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <img src="https://i.ibb.co/7QpKsCX/image.png" alt="Covid-19" />
      </div>
    </header>
  );
};

export default Header;
