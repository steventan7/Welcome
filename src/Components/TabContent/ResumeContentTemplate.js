import React from "react";
import styles from "./ResumeContentTemplate.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ResumeContentTemplate = ({ children }) => {
  return <div className={styles.ResumeContentTemplate}>{children}</div>;
};

const TemplateHeading = ({ children }) => {
  return <h3>{children}</h3>;
};

const TemplateItem = ({ dateRange, title, url }) => {
  return (
    <Link to={url} style={{textDecoration:'none', color:'black'}}>
      <Grid container justifyContent="space-between" alignItems="flex-start">
        <Grid item className={styles.zoom}>
          {title}
        </Grid>
        <Grid item>
          {dateRange && (
            <Grid container>
              <Grid item className={styles.dateRangeIcon}>
                <CalendarMonthIcon />
              </Grid>
              <Grid item>
                <span>{dateRange}</span>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Link>
  );
};
export { ResumeContentTemplate, TemplateHeading, TemplateItem };
