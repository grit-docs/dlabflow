import React, { useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { initYouTubePlayer, seekToTime } from './youtube-player';

// 이미지 파일 가져오기
import uploadImage from '@site/static/img/feature_1.png';
import datasetImage from '@site/static/img/feature_2.png';
import projectImage from '@site/static/img/feature_3.png';
import modelImage from '@site/static/img/feature_4.png';

import featureImage_1 from '@site/static/img/intro_1.png';

const FeatureList = [
    {
        title: '📂 간편한 데이터 업로드',
        image: uploadImage,
        description: (
            <>
                학습에 쓸 이미지를 손쉽게 올려보세요.
                JPG, PNG, BMP 파일을 지원하며, 폴더 전체를 업로드하는 것도 가능해요!
            </>
        ),
    },
    {
        title: '🏷️ 스마트한 데이터셋 관리',
        image: datasetImage,
        description: (
            <>
                이미지에 라벨을 붙여 데이터셋을 만들어보세요.
                팀원들과 함께 나눠서 작업하면 더 빠르고 효율적으로 끝낼 수 있어요!
            </>
        ),
    },
    {
        title: '🚀 누구나 쉽게 만드는 AI 프로젝트',
        image: projectImage,
        description: (
            <>
                준비된 데이터셋으로 바로 프로젝트를 시작해보세요.
                복잡한 설정은 NO! 몇 번만 클릭하면 바로 시작할 수 있어요!
            </>
        ),
    },
    {
        title: '🎯 원클릭 AI 학습',
        image: modelImage,
        description: (
            <>
                YOLO, EfficientDet 같은 최신 AI 모델을 자동으로 학습할 수 있어요.
                어려운 설정은 D-Lab Flow가 도와드릴게요! 그냥 클릭 한 번이면 끝!
            </>
        ),
    },
];

    function Feature({image, title, description}) {
    return (
        <div className="col col--6" style={{marginBottom: '40px'}}>
            <div className={styles.featureCard}>
                <div className={styles.featureImageWrapper}>
                    {image && (
                        <img
                            src={image}
                            alt={title}
                            className={styles.featureSvg}
                            loading="lazy" // 이미지 로딩 최적화
                        />
                    )}
                </div>
                <div className={styles.featureCardBody}>
                    <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
                    <div className={styles.featureDescription}>{description}</div>
                </div>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    useEffect(() => {
        const cleanup = initYouTubePlayer();
        return cleanup;
    }, []);
    return (
        <div>
            <section className={styles.videoSection}>
                <div className="container" style={{paddingBottom: '2rem'}}>
                    <div className="text--center">
                        <h2 className={styles.videoSectionTitle}>🎬 실제 사용 화면을 확인해보세요</h2>
                        <p className={styles.videoSectionDescription}>
                            몇 분이면 충분해요! D-Lab Flow가 어떻게 동작하는지 간단한 영상으로 직접 체험해보세요.
                        </p>
                    </div>
                    <div className={styles.videoRow}>
                        <div className={styles.videoColumn}>
                            <div className={styles.videoContainer} id="youtubePlayerContainer">
                                <iframe
                                    id="youtubePlayer"
                                    className={styles.videoIframe}
                                    src="https://www.youtube.com/embed/ff7eLBVBEbE?enablejsapi=1&controls=1"
                                    title="플랫폼 소개 동영상"
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                />
                            </div>
                        </div>
                        <div className={styles.timelineColumn}>
                            <div className={styles.videoTimelineMenu}>
                                <h3 className={styles.videoTimelineTitle}>📌 클릭하면 해당 부분으로 이동해요!</h3>
                                <div className={styles.videoTimelineList}>
                                    <div className={styles.videoTimelineItem} onClick={() => seekToTime(0)}>
                                        <span className={styles.videoTimelineIndex}>1</span>
                                        <span className={styles.videoTimelineText}>📁 데이터 저장소 만들기</span>
                                        <span className={styles.videoTimelineTime}>0:00</span>
                                    </div>
                                    <div className={styles.videoTimelineItem} onClick={() => seekToTime(15)}>
                                        <span className={styles.videoTimelineIndex}>2</span>
                                        <span className={styles.videoTimelineText}>🖼️ 이미지 파일 업로드하기</span>
                                        <span className={styles.videoTimelineTime}>0:15</span>
                                    </div>
                                    <div className={styles.videoTimelineItem} onClick={() => seekToTime(48)}>
                                        <span className={styles.videoTimelineIndex}>3</span>
                                        <span className={styles.videoTimelineText}>📊 데이터셋 구성하기</span>
                                        <span className={styles.videoTimelineTime}>0:48</span>
                                    </div>
                                    <div className={styles.videoTimelineItem} onClick={() => seekToTime(60)}>
                                        <span className={styles.videoTimelineIndex}>4</span>
                                        <span className={styles.videoTimelineText}>📋 라벨링 파일 등록하기</span>
                                        <span className={styles.videoTimelineTime}>1:00</span>
                                    </div>
                                    <div className={styles.videoTimelineItem} onClick={() => seekToTime(92)}>
                                        <span className={styles.videoTimelineIndex}>5</span>
                                        <span className={styles.videoTimelineText}>🏷️ 직접 라벨링 작업하기</span>
                                        <span className={styles.videoTimelineTime}>1:32</span>
                                    </div>
                                    <div className={styles.videoTimelineItem} onClick={() => seekToTime(117)}>
                                        <span className={styles.videoTimelineIndex}>6</span>
                                        <span className={styles.videoTimelineText}>🚀 프로젝트 시작하기</span>
                                        <span className={styles.videoTimelineTime}>1:57</span>
                                    </div>
                                    <div className={styles.videoTimelineItem} onClick={() => seekToTime(141)}>
                                        <span className={styles.videoTimelineIndex}>7</span>
                                        <span className={styles.videoTimelineText}>🔄 버전 설정하기</span>
                                        <span className={styles.videoTimelineTime}>2:21</span>
                                    </div>
                                    <div className={styles.videoTimelineItem} onClick={() => seekToTime(158)}>
                                        <span className={styles.videoTimelineIndex}>8</span>
                                        <span className={styles.videoTimelineText}>🧠 AI 모델 학습시키기</span>
                                        <span className={styles.videoTimelineTime}>2:38</span>
                                    </div>
                                    <div className={styles.videoTimelineItem} onClick={() => seekToTime(187)}>
                                        <span className={styles.videoTimelineIndex}>9</span>
                                        <span className={styles.videoTimelineText}>📊 모델 성능 확인하기</span>
                                        <span className={styles.videoTimelineTime}>3:07</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.features} style={{marginBottom: '3rem'}}>
                <div className="container">
                    <div className="text--center">
                        <h2 className={styles.featuresTitle}>✨ 주요 기능</h2>
                    </div>
                    <div className="row" style={{marginTop: '1.5rem', rowGap: '2rem'}}>
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
