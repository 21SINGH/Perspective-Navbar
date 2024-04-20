"use client";

import styles from "./style.module.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Button from "./Botton";

const variants = {
  open: {
    width: 440,
    height: 500,
    top: "-10px",
    right: "-10px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Topnav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.main}>
        <motion.div
          variants={variants}
          animate={isActive ? "open" : "closed"}
          initial="closed"
          className={styles.menu}
        >
          <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
      </div>
    </div>
  );
}
