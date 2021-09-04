import MatchupsContainer from "../../matchups/MatchupsContainer/MatchupsContainer";
import { DisplayType } from "../DashboardWidget/DisplayTypes";
import styles from ".//DashboardContent.module.css";

type DashboardContentProps = {
  selectedDisplay: DisplayType;
  matchups: [any];
};

const DashboardContent = ({
  selectedDisplay,
  matchups,
}: DashboardContentProps) => {
  return (
    <div className={styles.container}>
      <h1>{selectedDisplay}</h1>
      <MatchupsContainer matchups={matchups} />
    </div>
  );
};

export default DashboardContent;
