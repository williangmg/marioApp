import styles from "./buttonHome.module.scss";

function ButtonHome({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.customButton} type="button">
      {text}
    </button>
  );
}

export default ButtonHome;
