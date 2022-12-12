import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [navigator, useNavigator] = useState("");
  return (
    // <div className={styles.container}>
      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>Home</h2>
        </Link>
        <Link href="hash" className={styles.card}>
          <h2>Hash</h2>
        </Link>
        <Link href="sign" className={styles.card}>
          <h2>Sign</h2>
        </Link>
        <Link href="verify" className={styles.card}>
          <h2>Verify</h2>
        </Link>
      {/* </div> */}
    </div>
  );
}
