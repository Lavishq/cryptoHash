import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CryptoHash</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">CypherText</Link>
        </h1>

        <p className={styles.description}>
          Here, you can sign, hash or verify using {""}
          <a
            className={styles.code}
            href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"
            target="_blank"
          >
            ECDSA
          </a>
          {"  "}
          i.e. Elliptic_Curve_Digital_Signature_Algorithm.
        </p>

        <div className={styles.grid}>
          <Link href="/hash" className={styles.card}>
            <h2>Hash</h2>
          </Link>

          <Link href="/sign" className={styles.card}>
            <h2>Sign</h2>
            {/* <p>Discover and deploy boilerplate example Next.js projects.</p> */}
          </Link>

          <Link href="/verify" className={styles.card}>
            <h2>Verify</h2>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>
          {" "}
          &rarr; Made by{" "}
          <Link className={styles.code} href="https://twitter.com/_lavishq">
            Lavishq
          </Link>{" "}
          using NextJs boilerplate to scaffold it quick
        </span>
      </footer>
    </div>
  );
}
