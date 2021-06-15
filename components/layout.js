import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import NavBar from "./navbar";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Eric Pham";
export const siteTitle = "Eric's Blog";

export default function Layout({ children, home, hymns, section }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar />
      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profilepic.jpg"
                className={utilStyles.borderRounded}
                height={300}
                width={300}
                alt={name}
              />
              <h1 className={utilStyles.heading1Xl}>{name}</h1>
            </>
          ) : 
           <></> 
          }
        </header>
        <main>{children}</main>
        {hymns && (
          <div className={styles.backToHome}>
            <Link href="/hymns">
              <a>← Back to hymns</a>
            </Link>
          </div>
        )}
        {section && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
