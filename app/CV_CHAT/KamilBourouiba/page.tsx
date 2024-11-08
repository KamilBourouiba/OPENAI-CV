"use client";
import React, { useRef } from "react";
import styles from "../shared/page.module.css";

import Chat from "../../components/chat";
import FileViewer from "../../components/file-viewer";

const KamilPage = () => {
  const inputRef = useRef(null); // Create a ref for the input field

  const handleSend = () => {
    // Add your send logic here
    console.log("Send button clicked");

    // Blur the input field to prevent zoom
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.column}>
          <FileViewer />
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat />
          </div>
          <div>
            <input
              ref={inputRef} // Attach the ref to the input
              type="text"
              placeholder="Enter your question"
            />
            <button className={styles.sendButton} onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KamilPage;
