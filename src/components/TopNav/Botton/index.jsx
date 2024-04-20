import styles from "./style.module.scss";
import { motion } from "framer-motion";

export default function Button({ isActive, setIsActive, ref }) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={styles.button}
      ref={ref} // Pass the ref directly to the outermost element
    >
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <PerspectiveText label="Menu" />
        </div>
        <div className={styles.el}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

const PerspectiveText = ({ label }) => {
  return (
    <div className={styles.persPectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
};
