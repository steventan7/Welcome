import React from "react";
import TabContentTemplate from "./TabContentTemplate";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <TabContentTemplate heading="">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="gridContainer"
        direction="column"
      >
        <Grid>
          <h1>Let's get in touch!</h1>
        </Grid>
        <Grid>
          <Link href="https://github.com/steventan7" color="inherit">
            <GitHubIcon sx={{ fontSize: 40 }} className={styles.zoom}/>
          </Link>
          <Link href="mailto:szt4@scarletmail.rutgers.edu" color="inherit" >
            <EmailIcon sx={{ fontSize: 40 }} className={styles.zoom}/>
          </Link>
          <Link href="http://linkedin.com/in/steven-tan777" color="inherit">
            <LinkedInIcon sx={{ fontSize: 40 }} className={styles.zoom}/>
          </Link>
        </Grid>
      </Grid>
    </TabContentTemplate>
  );
};

export default Contact;
