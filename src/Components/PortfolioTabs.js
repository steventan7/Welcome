import React, { useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import TabPanel from "./TabPanel";
import styles from "./PortfolioTabsContainer.module.css";
import AllAboutMe from "./TabContent/AllAboutMe";
import Resume from "./TabContent/Resume";
import Contact from "./TabContent/Contact";
import { useLocation, useNavigate } from 'react-router-dom';

const tabRoutingMap = { '/about-me':0, '/resume':1, '/contact':2 }
const indexRoutingMap = { 0:'/about-me', 1:'/resume', 2:'/contact' }

const PortfolioTabs = (props) => {
  const {pathname} = useLocation(); // object de-structuring
  const navigate = useNavigate();

  const [tabIndex, setTabIndex] = useState(tabRoutingMap[pathname]);

  const handleChange = (event, newTabIndex) => {
    navigate(indexRoutingMap[newTabIndex])
    setTabIndex(newTabIndex);
  };

  return (
    <div className={styles.PortfolioTabsContainer}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "rgb(240,255,255)",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="About Me" className={styles.tab}/>
          <Tab label="Resume" className={styles.tab}/>
          <Tab label="Contact" className={styles.tab}/>
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} to ={tabIndex} index={0}>
        <AllAboutMe />
      </TabPanel>
      <TabPanel value={tabIndex} to ={tabIndex} index={1}>
        <Resume />
      </TabPanel>
      <TabPanel value={tabIndex} to ={tabIndex} index={2}>
        <Contact />
      </TabPanel>
    </div>
  );
};

export default PortfolioTabs;
