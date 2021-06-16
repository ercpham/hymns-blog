import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedThoughtsData } from "../lib/thoughts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allThoughtsData = getSortedThoughtsData();
  return {
    props: {
      allThoughtsData,
    },
  };
}

export default function Home({ allThoughtsData }) {
  return (
    <Layout section>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Thoughts, Studies, and Devos</h2>
        <p className={utilStyles.textNormal}>I like to write stuff down sometimes. 
        I hope you find my thoughts and reflections encouraging! I'm no theologian, 
        so if you catch anything suspect or inaccurate, please let me know. I'm always learning.
        </p>
        <ul className={utilStyles.list}>
          {allThoughtsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/thoughts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
