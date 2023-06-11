import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>
        <h1>Projects</h1>
        {/* <h2>
          <Link href="/">← Back to home</Link>
        </h2> */}
        <h2 href="https://github.com/ry263"> This Website </h2>
        <h2>
            <Link href="https://github.com/ry263">This Website</Link>
            </h2>
        
      </Layout>
    );
}