import React from "react";
import TabContentTemplate from "./TabContentTemplate";
import Grid from "@mui/material/Grid";
import styles from "./AllAboutMe.module.css";

const AllAboutMe = () => {
  return (
    <TabContentTemplate>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="gridContainer"
        direction="column"
      >
        <Grid item className="item">
          <img
            src="steven.jpeg"
            alt="pfp"
            width="230"
            height="230"
            className={styles.image}
          />
        </Grid>
        <Grid item className="item">
          <p className={styles.p}>
            Hello, there! 👋 I'm Steven! Thank you for visiting my website! I am a third-year student at Rutgers University - New Brunswick
            majoring in Computer Science and Cognitive Science and minoring in Psychology! Feel free to look around.
          </p>
        </Grid>
        <Grid>
          <img src="altaria-mega.gif" alt="alteria" width="150"
            height="150"/>
        </Grid>
      </Grid>
    </TabContentTemplate>
  );
};

export default AllAboutMe;
