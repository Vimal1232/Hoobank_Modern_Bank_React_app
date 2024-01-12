import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import { Button } from "./index";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex-col flex ml-3">
      <h3
        className={`font-poppins font-semibold text-white text-[18px] leading-[23px]  mb-1`}
      >
        {title}
      </h3>
      <p className={`${styles.paragraph} mt-2`}>{content}</p>
    </div>
  </div>
);

const business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, we’ll <br className="sm:block hidden" />
        handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((features, index) => (
        <FeatureCard key={features.id} {...features} index={index} />
      ))}
    </div>
  </section>
);
export default business;
