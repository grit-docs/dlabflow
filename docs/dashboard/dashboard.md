---
sidebar_position: 1
---

import DashboardImg from './img/Dashboard.png';
import KPIImg from './img/KPI.png';
import TrafficImg from './img/Traffic.png';
import ModelStatusImg from './img/Model_Status.png';

# 대시보드
## 개요
* 대시보드에서는 시스템의 주요 지표(KPI), 모델 상태, 트래픽 현황 등을 한눈에 확인할 수 있습니다.
  <div style={{ textAlign: 'center' }}>
    <img src={DashboardImg} alt="대시보드 화면" style={{ width: '100%' }} />
  </div>

<br />

## 주요 지표 (KPI)
* 전체 요청 수, 성공률, 평균 응답 시간 등 핵심 지표를 표시합니다.
  <div style={{ textAlign: 'center' }}>
    <img src={KPIImg} alt="KPI 예시" style={{ width: '60%' }} />
  </div>

<br />

## 트래픽
* 시간대별 트래픽과 피크타임 정보를 제공합니다.
  <div style={{ textAlign: 'center' }}>
    <img src={TrafficImg} alt="트래픽 차트" style={{ width: '70%' }} />
  </div>

<br />

## 모델 상태
* 학습/배포된 모델의 상태(정상/오류), 버전, 성능 요약을 확인합니다.
  <div style={{ textAlign: 'center' }}>
    <img src={ModelStatusImg} alt="모델 상태" style={{ width: '80%' }} />
  </div>

<br />

## 사용 방법
1. 화면 상단의 필터로 기간, 프로젝트, 모델을 선택합니다.  
2. KPI 카드에서 상세보기(확장)를 눌러 관련 로그나 그래프를 확인합니다.  
3. 문제가 발견되면 모델 상세 페이지로 이동하여 재학습/롤백/배포 작업을 수행합니다.
