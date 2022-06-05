import Grid from "@mui/material/Grid";
import PortfolioTabs from "./PortfolioTabs";
import styles from "./PortfolioContent.module.css";
import PortfolioDetail from "./PortfolioDetails/PortfolioDetail";

function PortfolioContent() {
  return (
    <div className={styles.background}>
      <Grid
        container
        alignItems="stretch"
        justifyContent="space-between"
        className={styles.PortfolioContent}
      >
        <Grid item xs={6} className="item">
          <PortfolioTabs />
        </Grid>
        <Grid item xs={6} className="item">
          <PortfolioDetail />
        </Grid>
      </Grid>
    </div>
  );
}

export default PortfolioContent;
