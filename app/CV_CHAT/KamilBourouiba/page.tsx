"use client";
import React from "react";
import Head from "next/head"; // Import Head from next/head
import styles from "../shared/page.module.css";

import Chat from "../../components/chat"; // Assuming Chat handles its own input
import FileViewer from "../../components/file-viewer"; // File viewer component

const KamilPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Kamil Page</title>
      </Head>
      <main className={styles.main}>
        <img src="/openai.svg" alt="Logo" className={styles.logo} /> {/* Logo at the top */}
        <div className={styles.container}>
          <div className={styles.fileViewer}>
            <FileViewer /> {/* Displaying the file viewer */}
          </div>
          <div className={styles.chatContainer}>
            <div className={styles.chat}>
              <Chat /> {/* Using the Chat component that handles its own messages and input */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default KamilPage;
