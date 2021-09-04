import MatchupTeam from "../MatchupTeam/MatchupTeam";
import styles from "./Matchup.module.css";

type MatchupProps = {
  matchup: any;
};

const Matchup = ({ matchup }: MatchupProps) => {
  const [firstTeam, secondTeam] = matchup;

  return (
    <div className={styles.container}>
      <MatchupTeam team={firstTeam} />
      <MatchupTeam team={secondTeam} />
    </div>
  );
};

export default Matchup;
