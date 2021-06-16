import styles from "./styles/navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function NavBar({ tabs }) {
  return (
    <div>
      <header className={styles.navbar}>
        {tabs.map(({ ref, nm }) => (
              <Link href={ref}>
                <a className={styles.navitem}>{nm}</a>
              </Link>
          ))}
      </header>
    </div>
  );
}
