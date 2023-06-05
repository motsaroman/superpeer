import { motion } from "framer-motion";
import { Button } from "../../ui/Button";
import desktop from "../../assets/images/section1/desktop.png";
import phone from "../../assets/images/section1/phone.png";
import s from "./Section1.module.css";

const animationRight = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 2 },
  }),
};
const animationLeft = {
  hidden: {
    x: 400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const Section1 = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={s.section}
      viewport={{ once: true }}
    >
      <motion.div variants={animationRight} className={s.sectionTitle}>
        <h1>
          A video <br /> platform for <br />
          the world’s
          <br /> leading minds
        </h1>
        <p className={s.sectionText}>
          Superpeer gives you the tools you need to
          <br />
          have paid 1:1 video calls and livestreams
          <br /> with your audience and paid subscribers.
        </p>
        <Button children={"REQUEST INVITE"} className={s.btn} />
      </motion.div>
      <motion.div variants={animationLeft} className={s.images}>
        <img
          src={desktop}
          alt="desktop-image"
          title="desktop-image"
          className={s.desktopImg}
        />
        <img
          src={phone}
          alt="phone-image"
          title="phone-image"
          className={s.phoneImg}
        />
      </motion.div>
    </motion.section>
  );
};
