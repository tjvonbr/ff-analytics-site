import React, { useState } from "react";
import DashboardContent from "../DashboardContent/DashboardContent";
import DashboardWidgetNav from "../DashboardWidgetNav";
import { DisplayType } from "../DashboardWidgetNav";
import styles from "./DashboardWidget.module.css";

const DashboardWidget = ({ matchups }: any) => {
  const [selectedDisplay, setSelectedDisplay] = useState(DisplayType.MATCHUPS);

  return (
    <div className={styles.container}>
      <DashboardWidgetNav
        selectedDisplay={selectedDisplay}
        setSelectedDisplay={setSelectedDisplay}
      />
      <DashboardContent selectedDisplay={selectedDisplay} matchups={matchups} />
    </div>
  );
};

export default DashboardWidget;
