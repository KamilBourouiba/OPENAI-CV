"use client";
import React from "react";
import Head from "next/head"; // Import Head from next/head
import styles from "../shared/page.module.css";

import Chat from "../../components/chat";
import FileViewer from "../../components/file-viewer";

const KamilPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Kamil Page</title> {/* Optional: Set a title for your page */}
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.column}>
            <FileViewer />
          </div>
          <div className={styles.chatContainer}>
            <div className={styles.chat}>
              <Chat />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default KamilPage;
