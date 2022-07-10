import classes from './Spinner.module.css';

const Spinner = ({ style }) => {
  return (
    <div className={`${classes.container} ${style}`}>
      <div className={classes.divider}></div>
      <p className={classes.loadingText}>
        <span className={classes.letter}>L</span>
        <span className={classes.letter}>o</span>
        <span className={classes.letter}>a</span>
        <span className={classes.letter}>d</span>
        <span className={classes.letter}>i</span>
        <span className={classes.letter}>n</span>
        <span className={classes.letter}>g</span>
      </p>
    </div>
  );
};

export default Spinner;
