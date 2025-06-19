import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: '🚀AI 학습, 이제 복잡하지 않아요!',
        Svg: require('@site/static/img/intro_1.png').default, // SVG를 PNG로 변경
        description: (
            <>
                <ul className={styles.textLeft}>
                    <li><strong>쉽고 빠른 데이터 업로드</strong><br/>
                        다양한 형식의 데이터를 손쉽게 불러오고, 전처리 기능으로 빠르게 학습을 시작할 수 있어요.
                    </li>

                    <li><strong>모델 학습 관리</strong><br/>
                        학습 이력과 설정값 비교, 성능 결과를 한눈에 확인해 반복 실험이 더욱 효율적입니다.
                    </li>

                    <li><strong>모델 튜닝과 배포 자동화</strong><br/>
                        모델 설정부터 리소스 최적화, 배포까지 한 번에 처리해 운영이 훨씬 간편해집니다.
                    </li>

                    <li><strong>안정적인 협업 지원</strong><br/>
                        팀원을 초대해 라벨링과 실험 결과를 함께 관리하며, 협업이 자연스럽게 이루어집니다.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: '📚가이드에서 확인할 수 있는 내용',
        Svg: require('@site/static/img/intro_2.png').default, // SVG를 PNG로 변경
        description: (
            <>
                <ul className={styles.textLeft}>
                    <li><strong>빠른 시작 튜토리얼</strong><br/>
                        처음 사용자를 위한 단계별 실습 가이드를 제공합니다.
                    </li>

                    <li><strong>기능별 사용법 안내</strong><br/>
                        모델 구성, 실험 설정, 로그 확인 등 주요 기능을 쉽게 익힐 수 있어요.
                    </li>

                    <li><strong>자주 묻는 질문(FAQ)</strong><br/>
                        궁금한 점을 빠르게 해결할 수 있도록 자주 묻는 질문을 모아뒀어요.
                    </li>

                    <li><strong>실전 팁 & 에러 해결법</strong><br/>
                        학습 중 마주치는 문제 상황에 대한 해결법과 실전 노하우를 함께 제공합니다.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: '🎯이런 분들에게 추천해요!',
        Svg: require('@site/static/img/intro_3.png').default, // SVG를 PNG로 변경
        description: (
            <>
                <ul className={styles.textLeft}>
                    <li><strong>처음 접하는 자</strong><br/>
                        인공지능에 대해 전혀 배우지 않은 사람
                    </li>

                    <li><strong>AI 입문자</strong><br/>
                        기본 개념을 배우기 시작한 사람
                    </li>

                    <li><strong>AI 엔지니어</strong><br/>
                        실험과 학습 결과 관리를 효율화하고 싶은 개발자
                    </li>

                    <li><strong>AI 연구자</strong><br/>
                        알고리즘과 모델을 연구하는 전문가
                    </li>

                    <li><strong>실무 도입 팀</strong><br/>
                        인공지능을 실무에 적용하려는 기업 및 팀
                    </li>


                </ul>
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={Svg} alt={title} className={styles.featureSvg} role="img" /> {/* 수정된 부분 */}
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
