import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import blogPosts from '@site/src/data/blogPosts';
import styles from './index.module.css';

const highlights = [
  {label: '도움말 문서', value: '50+ 항목'},
  {label: '활용 기관', value: '10+ 기관'},
  {label: '최신 버전', value: 'v2.5.0'},
];

function QuickIcon({name}) {
  const paths = {
    play: <><circle cx="12" cy="12" r="8" /><path d="m10 8 5 4-5 4V8Z" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" /><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" /></>,
    bot: <><rect x="5" y="7" width="14" height="12" rx="3" /><path d="M12 3v4M8 12h.01M16 12h.01M9 16h6" /><circle cx="12" cy="3" r="1" /></>,
  };
  return <svg className={styles.inlineIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Hero() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.tag}>D-Lab Flow Documentation</span>
            <Heading as="h1" className={styles.title}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroLead}>데이터 준비부터 AI 모델 운영까지</p>
            <p className={styles.subtitle}>
              데이터 수집과 저장소 구성부터 데이터셋·라벨링, AI 모델 학습·평가와 배포까지
              D-Lab Flow의 전체 업무 흐름을 단계별로 확인하세요.
            </p>
            <p className={styles.supportingText}>
              D-Lab Flow는 이미지와 정형데이터를 관리하고, 학습용 데이터셋 구성부터 AI 프로젝트
              생성, 모델 학습과 배포까지 지원하는 AI 개발·운영 플랫폼입니다.
            </p>
            <div className={styles.actions}>
              <Link className={clsx('button', styles.primary)} to="/docs/intro">
                <QuickIcon name="play" />
                빠른 시작 가이드
              </Link>
              <Link
                className={clsx('button', styles.tertiary)}
                to="https://chatgpt.com/g/g-68464343c35c8191a08b1cd8c1d9a976-d-lab-flow-ai-doumi"
              >
                <QuickIcon name="bot" />
                AI에게 질문하기
              </Link>
            </div>
            <div className={styles.meta}>
              {highlights.map((item) => (
                <div key={item.label} className={styles.metaItem}>
                  <strong>{item.value.split(' ')[0]}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.blogPanel}>
            <div className={styles.blogPanelHeader}>
              <span className={styles.blogEyebrow}>RESOURCES</span>
              <h2>D-Lab Flow 블로그</h2>
              <p>새로운 활용 방법과 실무 튜토리얼을 확인하세요.</p>
            </div>
            <div className={styles.blogList} aria-label="D-Lab Flow 블로그 글 목록">
              {blogPosts.map((post) => (
                <Link key={post.to} to={post.to} className={styles.blogCard}>
                  <span className={styles.blogMeta}>{post.tag} · {post.date}</span>
                  <span className={styles.blogTitle}>{post.title}</span>
                  <span className={styles.blogDescription}>{post.description}</span>
                  <span className={styles.blogArrow} aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
            <Link to="/blog" className={styles.blogFooter}>블로그 전체 보기 <span aria-hidden="true">→</span></Link>
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
