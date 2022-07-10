import { ButtonCTA, ButtonGhost } from './Button';

import classes from './ButtonBox.module.css';

const ButtonBox = ({ style, cta, ghost, onClickCta, onClickGhost }) => {
  return (
    <div className={`${classes.container} ${style}`}>
      <ButtonCTA text={cta} onClick={onClickCta} />
      <ButtonGhost text={ghost} onClick={onClickGhost} />
    </div>
  );
};

export default ButtonBox;
