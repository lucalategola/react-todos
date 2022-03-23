import styles from './Banner.module.css';

const Banner = (props) => {
  return (
    <div className={`${styles.banner} ${styles[props.type]}`} data-testid="banner">
      {props.children}
    </div>
  );
}

export default Banner;
