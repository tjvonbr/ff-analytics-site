import React, { useState } from "react";
import DashboardWidgetNav from "../DashboardWidgetNav";
import { DisplayType } from "../DashboardWidgetNav";
import styles from "./DashboardWidget.module.css";

const DashboardWidget = () => {
  const [selectedDisplay, setSelectedDisplay] = useState(DisplayType.MATCHUP);

  return (
    <div className={styles.container}>
      <DashboardWidgetNav
        selectedDisplay={selectedDisplay}
        setSelectedDisplay={setSelectedDisplay}
      />
    </div>
  );
};

export default DashboardWidget;
