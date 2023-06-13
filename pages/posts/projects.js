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
            <a target="_blank" href="https://github.com/ry263/personal-website" rel="noopener noreferrer">This Website</a>
            </h2>
        <h4><em>June 2023</em></h4>
        <p>This website was built using Next.js.</p>
        <h4>Tutorials I used:</h4>
        <p></p>

        <h2>
            <a target="_blank" href="https://github.com/Matthew1320/Road-Sign-Detection" rel="noopener noreferrer">Road Sign Detection Project</a>
            </h2>
        <h4>
            <a href="/Rachel_Yue_Resume.pdf" className="button" target="_blank">Project Report</a>
            </h4>
        <p>
        
        </p>

        <h2>
            <a target="_blank" href="https://github.com/ry263/Tutoring-App" rel="noopener noreferrer">Tutoring App</a>
            </h2>
        
        <h2>
            <a target="_blank" href="https://github.com/ry263/Big-Red-Royale" rel="noopener noreferrer">Big Red Royale</a>
            </h2>
        
        <h2>
            <a target="_blank" href="https://github.com/ry263/personal-website" rel="noopener noreferrer">Bear Market App</a>
            </h2>
        
      </Layout>
    );
}