import Countdown from 'react-countdown';
import styles from './timer.module.scss'; 
import Time from "./time";

export const Timer = () => {
  
  // return (
  //   <div className={ styles.countdown}>
  //     <h1>VOTING ENDS IN </h1>
  //     <div className={styles.time}>
  //       <div className={styles.digit_text}>
  //           <span className= {styles.digit}>08:</span>
  //           <span className={styles.text}>Days</span>
  //       </div>
  //       <div className={styles.digit_text}>
  //           <span className= {styles.digit}>08:</span>
  //           <span className={styles.text}>Hours</span>
  //       </div>
  //       <div className={styles.digit_text}>
  //           <span className= {styles.digit}>08:</span>
  //           <span className={styles.text}>Minutes</span>
  //       </div>
  //       <div className={styles.digit_text}>
  //           <span className= {styles.digit}>08</span>
  //           <span className={styles.text}>Seconds</span>
  //       </div>
  //     </div>
  //   </div>
  // );
  const Completion = () => <span>You are good to go!</span>;

	// Renderer callback with condition
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state

			return <Completion />;
		} else {
			// Render a countdown
			return (
				<Time days={days} hours={hours} minutes={minutes} seconds={seconds} />
			);
		}
	};
	return (
		<div className={styles.countdown}>
			{/* they use millisecond so pass your date as milliseconds and you can get the formula below */}
			{/* 1000 milliseconds * 60 seconds * 60 minutes * 24 how many Days */}
			<Countdown date={Date.now() + 6739200000} renderer={renderer} />
		</div>
	);
}


export default Timer;