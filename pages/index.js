import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Rachel. I'm a senior at Cornell University and an aspiring software engineer. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <h3>Current</h3>
        <p>
        🏫 &nbsp; Studying for BS in Computer Science at Cornell University
        <br></br>
        📝 &nbsp; TA for CS 4700: Foundations of AI
        <br></br>
        🏢 &nbsp; Interning at Epic Pharma
        <br></br>
        👩‍💻 &nbsp; Building a web game
        </p>
        <h3>Past</h3>

      </section>
    </Layout>
  );
}