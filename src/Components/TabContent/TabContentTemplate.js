import React from "react";
import styles from "./TabContentTemplate.module.css";

const TabContentTemplate = ({ heading, children }) => {
  return (
    <div className={styles.TabContentTemplate}>
      {heading && <h2>{heading}</h2>}
      {children}
    </div>
  );
};

export default TabContentTemplate;