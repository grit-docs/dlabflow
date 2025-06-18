import React from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FAQ_LIST = [
  {
    q: 'D-Lab Flow란 무엇인가요?',
    a: '컴퓨터 비전 모델을 쉽고 빠르게 만들 수 있는 플랫폼입니다.'
  },
  {
    q: '어떻게 시작하나요?',
    a: '상단의 Get Started 버튼을 눌러 빠른 시작 가이드를 따라 해 보세요.'
  },
  {
    q: '문의할 곳이 있나요?',
    a: '연구원 홈페이지의 연락처를 통해 언제든 문의하실 수 있습니다.'
  },
  {
    q: '라이선스는 어떻게 되나요?',
    a: '개인과 기업을 위한 다양한 라이선스 정책을 제공합니다.'
  },
  {
    q: '데모를 체험할 수 있나요?',
    a: '무료 체험 버전으로 주요 기능을 직접 사용해 볼 수 있습니다.'
  }
];

function Item({q, a}) {
  return (
    <div className={styles.item}>
      <Heading as="h3" className={styles.question}>{q}</Heading>
      <p>{a}</p>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className={styles.faqSection}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">FAQ</Heading>
        <div className="text--center">
          <img src={require('@site/static/img/intro_3.png').default} alt="faq" className={styles.image} />
        </div>
        {FAQ_LIST.map((entry, idx) => (
          <Item key={idx} {...entry} />
        ))}
      </div>
    </section>
  );
}
