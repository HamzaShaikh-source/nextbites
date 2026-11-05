import Link from "next/link";
import styles from "./status.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <p className={styles.eyebrow}>404 · Recipe missing</p>
      <h1>We couldn&apos;t find that recipe.</h1>
      <p>There are plenty of other good things to cook.</p>
      <Link href="/" className={styles.action}>Browse all recipes</Link>
    </main>
  );
}
