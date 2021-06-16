import styles from "./sidebar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useState } from "react";

export default function SideBar() {
  const [barWidth, setBarWidth] = useState(0);
  return (
    <div>
      <button className={styles.burger} onClick={openNav}></button>
      <div className={styles.sidebar} style={{width: `${barWidth}rem`}}>
        <button className={styles.closebtn} onClick={closeNav}>x</button>
        <Link href="/">
          <a className={styles.navitem}>Home</a>
        </Link>
        <Link href="/hymns">
          <a className={styles.navitem}>Hymns & Songs</a>
        </Link>
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
