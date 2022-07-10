import classes from './WrapperParagraph.module.css';

const WrapperParagraph = ({ style, children }) => {
  return <div className={`${classes.container} ${style}`}>{children}</div>;
};

export default WrapperParagraph;
