import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  description: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: '빠른 시작',
    description: '간단한 설정으로 프로젝트를 시작하세요.',
  },
  {
    title: '강력한 도구',
    description: '학습과 배포에 필요한 기능을 한곳에 제공합니다.',
  },
  {
    title: '유연한 확장',
    description: '원하는 워크플로우에 맞게 손쉽게 확장할 수 있습니다.',
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((item, idx) => (
            <Feature key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
