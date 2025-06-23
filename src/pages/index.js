import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import FloatingChatButton from "../components/FloatingChatButton";
import backgroundImage from '@site/static/img/vis_img1.jpg';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header
            className={clsx('hero hero--primary', styles.heroBanner)}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle" style={{color: 'white', textShadow: '0 0 10px rgba(0,0,0,0.5)'}}>
                    {siteConfig.tagline}
                </p>
                <div className={styles.buttons}>
                    <Link
                        className={styles.equalWidthButton}
                        to="/docs/intro">
                        빠르게 둘러보기 (4분)
                    </Link>
                    <Link
                        className={styles.equalWidthButton}
                        to="/docs/data_management/data_storage">
                        기본 사항 배우기
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
