import classes from './Wrapper.module.css';

const Wrapper = ({ style, styleContent, children }) => {
  return (
    <section className={`${classes.container} ${style}`}>
      <div className={`${classes.content} ${styleContent}`}>{children}</div>
    </section>
  );
};

export default Wrapper;
