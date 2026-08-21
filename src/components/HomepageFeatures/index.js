import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {initYouTubePlayer, seekToTime} from './youtube-player';

const promoTopics = [
  '하나의 플랫폼으로 연결되는 AI 개발 과정',
  '누구나 쉽게 시작할 수 있는 직관적인 환경',
  '데이터 준비부터 모델 개발까지 이어지는 흐름',
  '반복적인 AI 개발 작업의 효율적인 관리',
];

const oldTimeline = [
  ['데이터 저장소 만들기', 0, '0:00'], ['이미지 파일 업로드하기', 15, '0:15'], ['데이터셋 구성하기', 48, '0:48'],
  ['라벨링 파일 등록하기', 60, '1:00'], ['직접 라벨링 작업하기', 92, '1:32'], ['프로젝트 시작하기', 117, '1:57'],
  ['버전 설정하기', 141, '2:21'], ['AI 모델 학습시키기', 158, '2:38'], ['모델 성능 확인하기', 187, '3:07'],
];

const features = [
  {title: '데이터 저장소와 업로드', icon: 'database', description: '이미지와 정형데이터 저장소를 생성하고, 파일 또는 폴더를 직접 업로드할 수 있습니다. 사용자 업로드와 장비 업로드를 구분해 데이터를 관리합니다.'},
  {title: '수집 장치 연동', icon: 'radio', description: '카메라, 센서와 엣지 장치의 연결 정보를 생성하고, 현장 데이터를 지정된 장비 업로드 저장소로 자동 수집할 수 있습니다.'},
  {title: '데이터셋과 협업 라벨링', icon: 'tags', description: '저장소의 데이터를 학습용 데이터셋으로 구성하고, 바운딩 박스와 폴리곤 라벨링을 수행합니다. 팀원별 작업 분배와 클래스 통계도 확인할 수 있습니다.'},
  {title: '목적별 AI 프로젝트', icon: 'boxes', description: '객체 탐지, 인스턴스 분할과 정형데이터 분류 프로젝트를 생성하고, 프로젝트 목적에 맞는 데이터셋과 학습 조건을 설정합니다.'},
  {title: '학습 버전과 성능 비교', icon: 'branch', description: '하나의 프로젝트에서 여러 학습 버전을 생성하고, 데이터 전처리·증강·하이퍼파라미터 설정에 따른 결과를 비교할 수 있습니다.'},
  {title: '모델 평가와 배포', icon: 'chart', description: '평균정밀도, 정밀도와 재현율을 비교해 모델을 선택하고, PyTorch·ONNX·OpenVINO 형식으로 다운로드할 수 있습니다.'},
];

const adminMetrics = ['사용자 현황', '저장소 및 파일', '데이터셋 현황', '프로젝트와 버전', 'GPU 사용량', '학습 요청 및 실패'];

function Badge({children, muted = false}) {
  return <span className={`${styles.badge} ${muted ? styles.badgeMuted : ''}`}>{children}</span>;
}

function Icon({name}) {
  const paths = {
    database: <><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" /><path d="M5 9c0 1.7 3.1 3 7 3s7-1.3 7-3" /><path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" /></>,
    radio: <><path d="M12 12v8" /><circle cx="12" cy="9" r="2" /><path d="M7.8 5.8a6 6 0 0 0 0 8.4M16.2 5.8a6 6 0 0 1 0 8.4M4.9 3a10 10 0 0 0 0 14M19.1 3a10 10 0 0 1 0 14" /></>,
    tags: <><path d="M20 13 13 20a2 2 0 0 1-2.8 0L4 13V4h9l7 7a2 2 0 0 1 0 2Z" /><circle cx="8.5" cy="8.5" r="1" /><path d="M16 4h2l3 3v2" /></>,
    boxes: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /><path d="m8 5 8 4.5" /></>,
    branch: <><path d="M6 3v12a3 3 0 0 0 3 3h9" /><path d="M6 9h6a3 3 0 0 0 3-3V3" /><path d="m16 16 2 2-2 2" /><circle cx="6" cy="3" r="2" /><circle cx="15" cy="3" r="2" /></>,
    chart: <><path d="M4 19V5M4 19h16" /><path d="m7 15 3-4 3 2 5-7" /><circle cx="7" cy="15" r="1" /><circle cx="18" cy="6" r="1" /></>,
    admin: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h4M7 12h10M7 16h6" /><circle cx="18" cy="8" r="1" /></>,
  };
  return <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function VideoFrame({id, src, title, featured = false}) {
  return <div className={`${styles.videoContainer} ${featured ? styles.featuredVideo : ''}`}>
    <iframe id={id} className={styles.videoIframe} src={src} title={title} loading="lazy" allowFullScreen allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
  </div>;
}

function FeatureCard({title, icon, description}) {
  return <article className={styles.featureCard}>
    <div className={styles.featureIcon}><Icon name={icon} /></div>
    <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
    <p className={styles.featureDescription}>{description}</p>
  </article>;
}

function AdminFeatureBanner() {
  return <article className={styles.adminBanner}>
    <div className={styles.adminCopy}>
      <div className={styles.adminIcon}><Icon name="admin" /></div>
      <div><Badge muted>Admin</Badge><Heading as="h3">시스템 운영 관리</Heading>
        <p>관리자는 사용자별 파일과 GPU 사용 현황을 확인하고, 전체 저장소·데이터셋·프로젝트·학습 요청 및 실패 현황을 통합적으로 관리할 수 있습니다.</p>
      </div>
    </div>
    <div className={styles.metricList}>{adminMetrics.map((metric) => <span className={styles.metricChip} key={metric}><span aria-hidden="true">•</span>{metric}</span>)}</div>
  </article>;
}

export default function HomepageFeatures() {
  useEffect(() => initYouTubePlayer(), []);
  return <div>
    <section id="product-video" className={styles.videoSection} aria-labelledby="product-video-title">
      <div className="container">
        <div className={styles.sectionIntro}>
          <div className={styles.badges}><Badge>제품 소개</Badge><Badge>7분 10초</Badge></div>
          <Heading as="h2" id="product-video-title">D-Lab Flow, AI 개발을 더 쉽게</Heading>
          <p>데이터 준비부터 AI 모델 개발까지, D-Lab Flow가 복잡한 AI 개발 과정을 어떻게 하나의 흐름으로 연결하는지 영상으로 만나보세요.</p>
        </div>
        <div className={styles.latestVideoLayout}>
          <VideoFrame featured src="https://www.youtube-nocookie.com/embed/e_0r3UgGPA4" title="D-Lab Flow | 누구나 쉽게 시작하는 AI 모델 개발 플랫폼" />
          <aside className={styles.topicCard} aria-labelledby="video-topics-title">
            <h3 id="video-topics-title">D-Lab Flow가 제안하는 AI 개발 방식</h3>
            <ol className={styles.stepList}>{promoTopics.map((topic, index) => <li key={topic}><span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span><span>{topic}</span></li>)}</ol>
            <div className={styles.videoActions}>
              <Link className={styles.guideLink} to="/docs/intro">빠른 시작 가이드 <span aria-hidden="true">→</span></Link>
              <Link className={styles.textLink} to="https://youtu.be/2TtR36Yo8T8">상세 사용자 가이드 영상 보기 <span aria-hidden="true">↗</span></Link>
            </div>
          </aside>
        </div>
        <p className={styles.sectionBridge}>영상에서 소개한 주요 기능을 아래에서 자세히 확인할 수 있습니다.</p>
      </div>
    </section>

    <section className={styles.features} aria-labelledby="features-title"><div className="container">
      <div className={styles.featuresIntro}><span className={styles.eyebrow}>CORE FEATURES</span><Heading as="h2" id="features-title" className={styles.featuresTitle}>데이터 준비부터 모델 운영까지</Heading><p>D-Lab Flow의 주요 기능을 업무 흐름에 따라 확인할 수 있습니다.</p></div>
      <div className={styles.featureGrid}>{features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}</div>
      <AdminFeatureBanner />
    </div></section>

    <section className={styles.legacySection} aria-labelledby="legacy-title"><div className="container"><details className={styles.legacyDetails}>
      <summary id="legacy-title"><span><Badge muted>이전 버전</Badge><Badge muted>v1.0</Badge> 이전 버전 영상 보기</span></summary>
      <p className={styles.legacyDescription}>D-Lab Flow v1.0의 데이터 업로드, 데이터셋 구성과 AI 모델 학습 흐름을 확인할 수 있습니다. 현재 버전과 화면 구성 및 일부 기능이 다를 수 있습니다.</p>
      <div className={styles.legacyLayout}><VideoFrame id="legacyYoutubePlayer" src="https://www.youtube.com/embed/ff7eLBVBEbE?enablejsapi=1&controls=1" title="D-Lab Flow v1.0 빠른 사용 영상" /><div className={styles.videoTimelineMenu}><h3>기존 영상 주요 장면</h3><div className={styles.videoTimelineList}>{oldTimeline.map(([label, seconds, time], index) => <button type="button" className={styles.videoTimelineItem} onClick={() => seekToTime(seconds)} key={label}><span className={styles.videoTimelineIndex}>{index + 1}</span><span>{label}</span><time>{time}</time></button>)}</div></div></div>
    </details></div></section>
  </div>;
}
