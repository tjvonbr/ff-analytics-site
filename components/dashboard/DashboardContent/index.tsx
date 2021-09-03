import { DisplayType } from "../../DashboardWidget/DisplayTypes";
import styles from ".//DashboardContent.module.css";

type DashboardContentProps = {
  selectedDisplay: DisplayType;
};

const DashboardContent = ({ selectedDisplay }: DashboardContentProps) => {
  return (
    <div className={styles.container}>
      <h1>{selectedDisplay}</h1>
    </div>
  );
};

export default DashboardContent;
