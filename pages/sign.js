import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import useHashMessage from "../hooks/useHash";
import styles from "../styles/App.module.css";
import Navbar from "./Navbar";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [user, setUser] = useState("");

  const signMessage = async (account) => {
    if (ethereum) {
      // connect wallet
      connectHandler();
    }
    if (!userInput) {
      // no input
      console.log("Enter message to sign");
    }
    if (account && userInput) {
      // wallet connected and input
      const hash = useHashMessage(userInput);
      const signature = await ethereum.request({
        method: "personal_sign",
        params: [user.toString(), hash],
      });
      console.log(signature);
      return signature;
    }
  };

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setUser(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err);
        console.log("There was a problem connecting to MetaMask");
      }
    } else {
      alert("Install MetaMask");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign</title>
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/hash">Sign</Link>
        </h1>

        <p className={styles.description}>Sign a message</p>
      </main>
      <div className={styles.textContainer}>
        <textarea
          placeholder="enter message to sign ..."
          className={styles.promptBox}
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button onClick={signMessage}>sign message</button>
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
