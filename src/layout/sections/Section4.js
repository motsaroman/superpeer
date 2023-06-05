import { motion } from "framer-motion";
import { data } from "../../data/Data";
import pricingImg from "../../assets/images/section4/pricing.png";
import s from "./Section4.module.css";

const animation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

export const Section4 = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={s.section}
    >
      <h3>Features</h3>
      <div className={s.gridConteiner}>
        {data.map((data, index) => {
          return (
            <motion.div variants={animation} custom={index + 1}>
              <img
                src={data.icon}
                alt={data.title}
                title={data.title}
                className={s.icon}
              />
              <p className={s.title}>{data.title}</p>
              <p className={s.text}>{data.text}</p>
            </motion.div>
          );
        })}
      </div>
      <div className={s.pricingWrap}>
        <img
          src={pricingImg}
          alt="pricing"
          title="pricing"
          className={s.pricingImg}
        />
      </div>
    </motion.section>
  );
};
