import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/App.module.css";
import Navbar from "./Navbar";
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [hash, setHash] = useState("");

  function hashMessage(message) {
    console.log("message in bytes", utf8ToBytes(message));
    console.log("message hashed in bytes", keccak256(utf8ToBytes(message)));
    return keccak256(utf8ToBytes(message));
  }

  useEffect(() => {
    console.log("hash string",toHex(hashMessage(userInput)))
    setHash(toHex(hashMessage(userInput)));
  }, [userInput]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Hash</title>
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/hash">Hash</Link>
        </h1>

        <p className={styles.description}>
          A hash function is a mathematical algorithm that maps data of any size
          to a fixed-size output, usually used to index and identify data
          quickly.
        </p>
      </main>
      <div className={styles.textContainer}>
        <textarea
          placeholder="enter message to hash ...get kaccak hash of SHA3 family "
          className={styles.promptBox}
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        {/* <button className={styles.card} id="#hashbtn">
          Hash
        </button> */}
        {/* add a tooltip to copy onclick */}
        <div className={styles.textContainer}>
          {hash && (
            <div
              placeholder="enter message to hash ..."
              className={styles.hash}
            >{`hash: ${hash}`}</div>
          )}
        </div>
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