import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, this is OmidBaharifar!</p>
        <p>
          This site created by Next.js freamework, by following{" "}
          <a href="https://nextjs.org/learn/" target="__blank">
            this guid
          </a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About me</h2>
        <ul className={styles.grid}>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`} className={styles.link}>
              <li className={styles.card} key={id}>
                {title}
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
