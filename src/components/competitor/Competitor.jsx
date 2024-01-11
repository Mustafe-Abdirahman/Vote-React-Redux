import styles from './competitor.module.scss';
import { MdHowToVote } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { handleModal } from '../../features/modal/modalSlice';
import { setCurrentCompetitor } from '../../features/modal/competitors/competitorSlice';


const Competitor = ({competitor}) => {

    const backgroundStyle = {
		width: "100%",
		// height: "500px",
		background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${competitor.Photo})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

  const dispatch = useDispatch();
  
  const VoteNow = () => {
    dispatch(setCurrentCompetitor(competitor));
    dispatch(handleModal())
  }
  return (
    <div className={styles.competitor} style={backgroundStyle}>
      <div className={styles.info}>
        <span className={styles.name}>{competitor.FirstName}</span>
        <span className={styles.state}>{competitor.RepresentingState}</span>
        <span className={styles.vote_count}>Total Votes: {competitor.NumberofVotes}</span>
      </div>

      <div className={styles.vote} onClick={VoteNow}>
        <MdHowToVote className={styles.vote_icons} /> 
      </div>
    </div>
  );
}

export default Competitor;
