import styles from "./status.module.css";

export default function Loading() {
  return (
    <main className={styles.main} role="status" aria-live="polite">
      <div className={styles.skeleton} aria-hidden="true" />
      <p>Loading recipes…</p>
    </main>
  );
}
