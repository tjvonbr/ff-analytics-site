import { DisplayType } from "../DashboardWidgetNav";
import styles from "./DashboardWidgetNavBtn.module.css";

type WidgetNavBtn = {
  display: any;
  selectedDisplay: DisplayType;
  setSelectedDisplay: (string: DisplayType) => void;
};

const DashboardWidgetNavBtn = ({
  display,
  selectedDisplay,
  setSelectedDisplay,
}: WidgetNavBtn) => {
  return (
    <div
      className={`${styles.container} ${
        selectedDisplay === display.type ? styles.selected : null
      }`}
      onClick={() => setSelectedDisplay(display.type)}
    >
      <p
        className={`${styles.text} ${
          selectedDisplay === display.type ? styles.selectedText : null
        }`}
      >
        {display.type}
      </p>
      <div
        className={`${styles.selectedUnderline} ${
          selectedDisplay === display.type ? styles.selected : null
        }`}
      />
    </div>
  );
};

export default DashboardWidgetNavBtn;
