import videoCallsImg from "../../assets/images/section2/video-calls.png";
import s from "./Section2.module.css";

export const Section2 = () => {
  return (
    <section className={s.section}>
      <div className={s.lineBg}></div>
      <div className={s.bgImg}></div>
      <div class={s.sectionImg}>
        <img
          src={videoCallsImg}
          alt="video-calls"
          title="video-calls"
          className={s.videoCallsImg}
        />
      </div>
    </section>
  );
};
