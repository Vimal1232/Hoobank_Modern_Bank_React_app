import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter}`}>
    <div
      className={`${styles.flexCenter} flex-wrap w-full
    `}
    >
      {clients.map((client) => (
        <div
          key={client.id}
          className={`${styles.flexCenter}  p-4 flex-1 sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt={client.name}
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);
export default Clients;
