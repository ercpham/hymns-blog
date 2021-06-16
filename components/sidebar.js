import styles from "./styles/sidebar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useState } from "react";

export default function SideBar({ tabs }) {
  const [barWidth, setBarWidth] = useState(0);
  return (
    <div>
      <button className={styles.burger} onClick={openNav}></button>
      <div className={styles.sidebar} style={{ width: `${barWidth}rem` }}>
        <button className={styles.closebtn} onClick={closeNav}>
          x
        </button>
          {tabs.map(({ ref, nm }) => (
              <Link href={ref}>
                <a className={styles.navitem}>{nm}</a>
              </Link>
          ))}
      </div>
    </div>
  );
  /* Set the width of the side navigation to 250px */
  function openNav() {
    setBarWidth(15);
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    setBarWidth(0);
  }
}
