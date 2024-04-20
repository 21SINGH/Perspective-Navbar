import React from "react";
import styles from "./style.module.scss";
import { Links, FooterLink } from "./data";
import { motion } from "framer-motion";
import Link from "next/link";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },

  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y:20
  },

  enter: (i) => ({
    opacity: 1,
    y:0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link, i) => {
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                variants={perspective}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={link.href}>{link.title}</Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        {FooterLink.map((link, i) => {
          return (
              <motion.a
              key={`f_${i}`}
                variants={slideIn}
                custom={i}
                href={link.href}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {link.title}
              </motion.a>

          );
        })}
      </div>
    </div>
  );
}
