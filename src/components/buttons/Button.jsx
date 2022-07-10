import classes from './Button.module.css';

export const ButtonCTA = ({ style, text, onClick }) => {
  return (
    <button className={`${classes.btnCTA} ${style}`} onClick={onClick}>
      {text}
    </button>
  );
};

export const ButtonGhost = ({ style, text, onClick }) => {
  return (
    <button className={`${classes.btnGhost} ${style}`} onClick={onClick}>
      {text}
    </button>
  );
};

export const ButtonText = ({ style, text, onClick }) => {
  return (
    <button className={`${classes.btnText} ${style}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonText;
