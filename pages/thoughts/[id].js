import Head from 'next/head'
import Layout from "../../components/layout";
import { getAllThoughtIds, getThoughtData } from "../../lib/thoughts";
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const thoughtData = await getThoughtData(params.id);
  return {
    props: {
      thoughtData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllThoughtIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ thoughtData }) {
  return (
    <Layout thoughts>
      <Head>
        <title>{thoughtData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{thoughtData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={thoughtData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: thoughtData.contentHtml }} />
      </article>
    </Layout>
  )
}
