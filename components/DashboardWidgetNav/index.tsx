import DashboardWidgetNavBtn from "../DashboardWidgetNavBtn";
import styles from "./DashboardWidgetNav.module.css";

export enum DisplayType {
  MATCHUP = "Matchup",
  TEAM = "Team",
  PLAYERS = "Players",
  TRENDING = "Trending",
}

const dashboardNavDirectory = [
  {
    key: 0,
    text: "Matchup",
    type: DisplayType.MATCHUP,
  },
  {
    key: 1,
    text: "Team",
    type: DisplayType.TEAM,
  },
  {
    key: 2,
    text: "Players",
    type: DisplayType.PLAYERS,
  },
  {
    key: 3,
    text: "Trending",
    type: DisplayType.TRENDING,
  },
];

type DashboardWidgetNavProps = {
  selectedDisplay: DisplayType;
  setSelectedDisplay: (string: DisplayType) => void;
};

const DashboardWidgetNav = ({
  selectedDisplay,
  setSelectedDisplay,
}: DashboardWidgetNavProps) => {
  return (
    <div className={styles.container}>
      {dashboardNavDirectory.map((display: any) => (
        <DashboardWidgetNavBtn
          key={display.key}
          display={display}
          selectedDisplay={selectedDisplay}
          setSelectedDisplay={setSelectedDisplay}
        />
      ))}
    </div>
  );
};

export default DashboardWidgetNav;
