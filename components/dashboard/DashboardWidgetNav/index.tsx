import DashboardWidgetNavBtn from "../DashboardWidgetNavBtn";
import styles from "./DashboardWidgetNav.module.css";

export enum DisplayType {
  MATCHUPS = "Matchups",
  ROSTERS = "Rosters",
  PLAYERS = "Players",
  TRENDING = "Trending",
  RECORDS = "Records",
}

const dashboardNavDirectory = [
  {
    key: 0,
    text: "Matchup",
    type: DisplayType.MATCHUPS,
  },
  {
    key: 1,
    text: "Team",
    type: DisplayType.ROSTERS,
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
  {
    key: 4,
    text: "Records",
    type: DisplayType.RECORDS,
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
