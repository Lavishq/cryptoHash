import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/App.module.css";
import Navbar from "./Navbar";
import { ethers } from "ethers";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [sig, setSig] = useState("");
  const [address, setAddress] = useState("");

  const copy = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      alert("Text copied");
    }
  };

  const getAddress = async () => {
    if (userInput && sig) {
      const recoveredAddress = ethers.utils.verifyMessage(userInput, sig);
      console.log(recoveredAddress);
      setAddress(recoveredAddress);
    } else {
      console.log("Enter input");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Verify</title>
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/verify">Verify</Link>
        </h1>

        <div className={styles.description}>
          You can verify who signed a message by passing signature and message
          <br />
          <em>
            {" "}
            verification was done using{" "}
            <a
              href="https://docs.ethers.org/v5/api/utils/address/#utils-recoverAddress"
              target="_blank"
              className={styles.code}
            >
              ethersJs lib
            </a>
          </em>
        </div>
      </main>
      <div className={styles.textContainer}>
        <textarea
          placeholder="enter message to verify ...  e.g. 'gm'"
          className={styles.promptBox}
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <textarea
          placeholder="signature ...   e.g: 0x16405fa9d4139c87b13c5dcc8873389c606fe57bd356672586ae430e4e1e04d27ccc726928a3600ce54b33a4b8933415f4c353dd290544577c068bea145ca6111b"
          className={styles.promptBox}
          value={sig}
          onChange={(e) => {
            setSig(e.target.value);
          }}
        />
        <button className={styles.card} onClick={getAddress}>
          Verify
        </button>
      </div>

      {address && (
        <div className={styles.textContainer}>
          <span className={styles.description}>Address:</span>
          <div className={styles.hash} onClick={copy}>
            {address}
          </div>
        </div>
      )}

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
