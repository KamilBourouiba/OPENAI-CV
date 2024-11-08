"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "Ask me anything": "KamilBourouiba",
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Chat with KAMIL's AI Agent
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/CV_CHAT/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
