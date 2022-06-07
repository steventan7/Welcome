import React from "react";
import styles from "./ResumeDetail.module.css";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { appData } from "../../resumeData";

const ResumeDetail = () => {
  const { pathname } = useLocation();
  const [, mainSection, subSection, id] = pathname.split("/");

  let resumeDetails = <p className={styles.pad}> Click around to learn more about me </p>;
  let image = (
      <p></p>
  );

  if (mainSection === "resume" && subSection && id) {
    const resume = appData[subSection][id];
    image = (
        <img
          src={resume.image}
          className={styles.image} 
          alt="here"
          height="210px"
          width="210px"
        />
    );
    resumeDetails = <p className={styles.resumePadding}>{resume.description}</p>;
  }

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="gridContainer"
        direction="column"
      >
        <div className={styles.bubble}>
          <Grid item className="item">
            {image}
          </Grid>
          <Grid className="item"> {resumeDetails}</Grid>
        </div>
      </Grid>
    </>
  );
};

export default ResumeDetail;
