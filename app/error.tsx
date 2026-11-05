"use client";

import styles from "./status.module.css";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className={styles.main}>
      <p className={styles.eyebrow}>Something went wrong</p>
      <h1>Let&apos;s give that another try.</h1>
      <p>We couldn&apos;t load this page right now.</p>
      <button type="button" onClick={reset} className={styles.action}>Try again</button>
    </main>
  );
}
