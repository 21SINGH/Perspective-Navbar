'use client'

import styles from "./style.module.scss";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Button from "./Botton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const header = useRef(null);
  const button = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(button.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight ,
          onLeave: () => {
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },
          onEnterBack: () => {
            gsap.to(button.current, {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            });
            setIsActive(false);
          },
        },
      });
  }, []);

  return (
    <div ref={header} className={styles.header}>
      <div ref={button} className={styles.main}>
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
