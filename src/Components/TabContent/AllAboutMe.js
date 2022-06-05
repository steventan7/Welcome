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
            Hello, there! 👋 I am a second year student at Rutgers University - New Brunswick
            double majoring in Computer Science and Cognitive Science and
            minoring in Psychology. I am a huge fan of Pokémon and love cats.
            Outside my academics and coding, you'll find me running, going on
            hour-long walks, or playing the piano.
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
