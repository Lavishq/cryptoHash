import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/App.module.css";
import Navbar from "./Navbar";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Verify</title>
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/hash">Verify</Link>
        </h1>

        <p className={styles.description}>Verify the signature ...by</p>
      </main>
      <div className={styles.textContainer}>
        <textarea
          placeholder="enter message to verify ..."
          className={styles.promptBox}
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
      </div>

      <footer className={styles.footer}>
        <span>
          {" "}
          &rarr; Made by{" "}
          <Link className={styles.code} href="https://twitter.com/_lavishq">
            Lavishq
          </Link>{" "}
          using NextJs boilerplate
        </span>
      </footer>
    </div>
  );
}
