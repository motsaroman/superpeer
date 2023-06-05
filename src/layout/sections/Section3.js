import { motion } from "framer-motion";
import liveStream from "../../assets/images/section3/live-stream.png";
import s from "./Section3.module.css";
import streamPhoneUp from "../../assets/images/section3/stream-phone-up.png";
import phoneStat from "../../assets/images/section3/phone-stat.png";

const animation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

export const Section3 = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={s.section}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className={s.sectionWrap}
      >
        <div className={s.titleText}>
          <h2>Beautiful Livestreams</h2>
          <p className={s.textCenter}>
            Superpeer Channels allow you to host livestreams, build a community
            and
            <br /> earn with recurring monthly subscriptions.
          </p>
          <motion.div variants={animation} custom={1} className={s.list}>
            <p className={s.listOne}>
              1. Turn your audience into
              <br /> subscribers
              <p className={s.listSubscribe}>
                Superpeer channels are designed to
                <br /> accrue subscribers and automatically
                <br /> send them a calendar invite each time
                <br /> you do another stream.
              </p>
            </p>
          </motion.div>
        </div>
        <div className={s.liveStreamBlock}>
          <img
            src={streamPhoneUp}
            alt="stream-phone"
            title="stream-phone"
            className={s.streamPhoneImg}
          />
          <div className={s.responsiveImg}>
            <img
              src={phoneStat}
              alt="phone-stat"
              title="phone-stat"
              className={s.phoneStatImgMedia}
            />
            <img
              src={streamPhoneUp}
              alt="stream-phone"
              title="stream-phone"
              className={s.streamPhoneImgMedia}
            />
          </div>
          <img
            src={liveStream}
            alt="live-stream"
            title="live-stream"
            className={s.liveStreamImg}
          />
          <img
            src={phoneStat}
            alt="phone-stat"
            title="phone-stat"
            className={s.phoneStatImg}
          />
        </div>
        <motion.div variants={animation} custom={2} className={s.list2}>
          <p className={s.listTwo}>
            2. Livestream with small groups
            <br /> or thousands of viewers
            <p className={s.listSubscribe}>
              Superpeer gives you tools to let your
              <br /> viewers go live with you and speak,
              <br /> comment and upvote, and network
              <br /> with each other.
            </p>
          </p>
        </motion.div>
        <motion.div variants={animation} custom={3} className={s.list3}>
          <p className={s.listTwo}>
            3. Earn recurring revenue
            <br /> through subscriptions
            <br /> or thousands of viewers
            <p className={s.listSubscribe}>
              Sell tickets to streams, introduce
              <br /> channel subscription fees, allow
              <br /> donations, or make it totally free.
            </p>
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
