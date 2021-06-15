import styles from './navbar.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        <header className={styles.navbar}>
            <Link href="/">
                <a className={styles.navitem}>Home</a>
            </Link>
            <Link href="/hymns">
                <a className={styles.navitem}>Hymns & Songs</a>
            </Link>
        </header>
    )
}