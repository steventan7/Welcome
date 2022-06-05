import React, {useState} from "react";
import styles from "./PortfolioDetail.module.css";
import ResumeDetail from "./ResumeDetail";

const PortfolioDetail = () => {
  const [visible, setVisibility] = useState(false);

  const bubbleBackground = (
    <div id="background-wrap">
      <div className={`${styles.bubble} ${styles.x1}`}></div>
      <div className={`${styles.bubble} ${styles.x2}`}></div>
      <div className={`${styles.bubble} ${styles.x3}`}></div>
      <div className={`${styles.bubble} ${styles.x4}`}></div>
      <div className={`${styles.bubble} ${styles.x5}`}></div>
      <div className={`${styles.bubble} ${styles.x6}`}></div>
      <div className={`${styles.bubble} ${styles.x7}`}></div>
      <div className={`${styles.bubble} ${styles.x8}`}></div>
      <div className={`${styles.bubble} ${styles.x9}`}></div>
      <div className={`${styles.bubble} ${styles.x10}`}></div>
    </div>
  );
  return <> {bubbleBackground} <ResumeDetail setVisibility= {setVisibility} /> </>;
};

export default PortfolioDetail;
