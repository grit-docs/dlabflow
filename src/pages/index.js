import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import backgroundImage from '@site/static/img/vis_img1.jpg';
import styles from './index.module.css';

const quickLinks = [
  {
    title: '빠른 시작 튜토리얼',
    description: 'DLabFlow 핵심 개념과 사용 방법을 빠르게 살펴보기',
    to: '/docs/intro',
  },
  {
    title: '객체 탐지 AI 모델 만들기',
    description: 'PASCAL VOC 2012 공개 데이터셋을 활용해 D-Lab Flow에서 객체 탐지(Object Detection) 모델을 만드는 방법을 소개',
    to: '/blog/voc-classification',
  },
  {
    title: '정형 데이터 분류 모델 만들기',
    description: '지도학습 기반의 정형 데이터 분류 모델을 구축하는 방법을 소개',
    to: '/blog/tabular-classification',
  },
];

const highlights = [
  {label: '도움말 문서', value: '50+ 항목'},
  {label: '활용 기관', value: '5+ 기관'},
  {label: '최신 버전', value: 'v2.0.7'},
];

function Hero() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <section
      className={styles.hero}
      style={{'--hero-image': `url(${backgroundImage})`}}
    >
      <div className={styles.heroBackdrop} />
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.tag}>DLab-Flow Guides</span>
            <Heading as="h1" className={styles.title}>
              {siteConfig.title}
            </Heading>
            <p className={styles.subtitle}>{siteConfig.tagline}</p>
            <div className={styles.actions}>
              <Link className={clsx('button button--primary', styles.primary)} to="/docs/intro">
                문서 열기
              </Link>
              <Link
                className={clsx('button button--secondary button--outline', styles.secondary)}
                to="https://chatgpt.com/g/g-68464343c35c8191a08b1cd8c1d9a976-d-lab-flow-ai-doumi"
              >
                AI에게 질문하기
              </Link>
            </div>
            <div className={styles.meta}>
              {highlights.map((item) => (
                <div key={item.label} className={styles.metaItem}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.cardRail}>
            {quickLinks.map((link) => (
              <Link key={link.title} to={link.to} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardDot} />
                  <span className={styles.cardLabel}>가이드</span>
                </div>
                <div className={styles.cardBody}>
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </div>
                <span className={styles.cardAction}>바로 이동</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="DLabFlow 도움말 메인 페이지">
      <Hero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
