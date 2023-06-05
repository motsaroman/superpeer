import { motion } from "framer-motion";
import twiterIco from "../../assets/icons/footer/twitter.svg";
import instaIco from "../../assets/icons/footer/instagram.svg";
import { Button } from "../../ui/Button";
import s from "./Footer.module.css";

const animation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
export const Footer = () => {
  return (
    <footer>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className={s.footerBlock1}
      >
        <motion.h4 variants={animation} custom={1}>
          Ready to become a Superpeer?
        </motion.h4>
        <motion.p variants={animation} custom={2} className={s.titleText}>
          Build and grow your community face-to-face and make money while you do
          it.
        </motion.p>
        <Button children={"REQUEST INVITE"} className={s.btn} />
      </motion.div>
      <div className={s.footerBlock2}>
        <div className={s.links}>
          <a href="#" className={s.linksList}>
            Blog
          </a>
          <a href="#" className={s.linksList}>
            FAQ
          </a>
          <a href="#" className={s.linksList}>
            Privacy
          </a>
          <a href="#" className={s.linksList}>
            Terms
          </a>
        </div>
        <div className={s.icons}>
          <img
            src={twiterIco}
            alt="twitter"
            title="twitter"
            className={s.twitter}
          />
          <img src={instaIco} alt="instagram" title="instagram" />
        </div>
        <p className={s.copyright}>Superpeer, Inc.</p>
      </div>
    </footer>
  );
};
