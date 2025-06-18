import React from 'react';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

function UploadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" {...props}>
      <path d="M12 5v14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TrainIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
      <polygon points="10,8 16,12 10,16" fill="currentColor" />
    </svg>
  );
}

function DeployIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" {...props}>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const steps = [
  {
    title: '데이터 업로드',
    Icon: UploadIcon,
    description: '이미지와 라벨을 쉽고 빠르게 불러옵니다.'
  },
  {
    title: '모델 학습',
    Icon: TrainIcon,
    description: '다양한 설정으로 모델을 손쉽게 학습합니다.'
  },
  {
    title: '배포 및 모니터링',
    Icon: DeployIcon,
    description: '완성된 모델을 서비스에 바로 적용할 수 있습니다.'
  },
];

function Step({Icon, title, description}) {
  return (
    <div className={clsx('col col--4', styles.step)}>
      <div className="text--center">
        <Icon className={styles.icon} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className={styles.howSection}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">How it works</Heading>
        <div className="row">
          {steps.map((step, idx) => (
            <Step key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
