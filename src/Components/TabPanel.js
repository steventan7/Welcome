import React from "react";
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import styles from "./TabPanel.module.css"

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className = {styles.tabPanel}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
