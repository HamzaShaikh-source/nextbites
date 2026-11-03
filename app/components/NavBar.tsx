import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <Link href="/" className={styles.brand}>
        Next<span>Bites</span>
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href="/">Recipes</Link>
        </li>
      </ul>
    </nav>
  );
}
