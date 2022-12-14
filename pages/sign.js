import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import useHashMessage from "../hooks/useHash";
import styles from "../styles/App.module.css";
import Navbar from "./Navbar";
import { utf8ToBytes } from "ethereum-cryptography/utils";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [sig, setSig] = useState("");
  const [user, setUser] = useState("");
  const [connected, setConnected] = useState(false);

  const copy = async () => {
    if (sig) {
      await navigator.clipboard.writeText(sig);
      alert("Text copied");
    }
  };

  const signMessage = async (account) => {
    // if (ethereum) {
    // connect wallet
    // const address = await connectHandler();
    // setUser(address);
    // }
    if (!userInput) {
      // no input
      console.log("Enter message to sign");
    }
    if (user && userInput) {
      // below lines can be used to hash the msg then sign but you can hash first and copy then sign too
      // const hashMsg = useHashMessage(userInput);
      // setHash(hashMsg);
      // console.log(hash);
      const signature = await ethereum.request({
        method: "personal_sign",
        params: [user, userInput],
      });
      console.log(signature);
      setSig(signature);
    }
  };

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        setConnected(true);
        setUser(accounts[0]);
        return;
      } catch (err) {
        // console.error(err);
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
          <Link href="/sign">Sign</Link>
        </h1>

        <p className={styles.description}>
          Sign a message. First the message is hashed and then signed by account
        </p>
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

        {connected ? (
          <button className={styles.card} onClick={signMessage}>
            Sign
          </button>
        ) : (
          <button className={styles.card} onClick={connectHandler}>
            Connect
          </button>
        )}
        {sig && (
          <>
            <span className={styles.description}>Signature:</span>
          </>
        )}
        <div className={styles.textContainer} onClick={copy}>
          {sig && (
            <div className={styles.hash} onClick={copy}>
              {sig.substring(0, 30)}.....{" "}
              {sig.substring(sig.length - 30, sig.length)}
            </div>
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
