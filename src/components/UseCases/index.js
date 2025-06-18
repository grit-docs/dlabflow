import React from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function UseCases() {
  return (
    <section className={styles.useSection}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">Use Cases</Heading>
        <div className="text--center">
          <img src={require('@site/static/img/intro_2.png').default} alt="use cases" className={styles.image} />
        </div>
        <ul className={styles.list}>
          <li><strong>처음 접하는 자</strong> - 인공지능에 대해 전혀 배우지 않은 사람</li>
          <li><strong>AI 입문자</strong> - 기본 개념을 배우기 시작한 사람</li>
          <li><strong>AI 엔지니어</strong> - 실험과 학습 결과 관리를 효율화하고 싶은 개발자</li>
          <li><strong>AI 연구자</strong> - 알고리즘과 모델을 연구하는 전문가</li>
          <li><strong>실무 도입 팀</strong> - 인공지능을 실무에 적용하려는 기업 및 팀</li>
          <li><strong>프로젝트 관리자</strong> - 업무 프로세스를 효율적으로 관리하려는 사람</li>
          <li><strong>교육 진행자</strong> - 실습 예제로 활용하려는 강사</li>
        </ul>
      </div>
    </section>
  );
}
