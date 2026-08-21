// Blog front matter를 기준으로 관리하는 Hero용 요약 목록입니다.
// 새 글을 추가할 때는 blog/<date>-<name>/index.md의 slug, title, tags, description을 함께 반영하세요.
// 최신 게시일 순으로 정렬합니다.
const blogPosts = [
  {
    date: '2026-08-21',
    tag: 'MLOps · Kubeflow',
    title: '쿠브플로우 연구에서 D-Lab Flow까지, 강원ICT융합연구원의 MLOps 기술 여정',
    description: '강원ICT융합연구원이 축적해 온 쿠브플로우 연구가 D-Lab Flow와 교육·출판으로 확장된 과정을 소개합니다.',
    to: '/blog/kubeflow-research-to-dlabflow',
  },
  {
    date: '2026-03-31',
    tag: '사용 현황',
    title: 'D-Lab Flow 자원 모니터링, 사용 현황 대시보드로 한눈에 파악하기',
    description: 'D-Lab Flow의 사용 현황 대시보드와 프로젝트 전반의 자원 흐름을 모니터링하는 방법을 소개합니다.',
    to: '/blog/Usage%20Overview',
  },
  {
    date: '2025-12-01',
    tag: '정형데이터',
    title: '정형 데이터 분류 모델 만들기',
    description: 'D-Lab Flow에서 지도학습 기반의 정형 데이터 분류 모델을 구축하는 방법을 소개합니다.',
    to: '/blog/tabular-classification',
  },
  {
    date: '2025-10-30',
    tag: '객체 탐지',
    title: '브라우저에서 동작하는 폐렴 탐지 데모',
    description: 'D-Lab Flow에서 학습한 YOLO 모델을 ONNX로 변환해 브라우저에서 활용하는 방법을 소개합니다.',
    to: '/blog/yolo-onnx-object-detection-react-pneumonia',
  },
  {
    date: '2025-10-27',
    tag: '객체 탐지',
    title: '브라우저에서 동작하는 실시간 적혈구 탐지 데모',
    description: 'D-Lab Flow에서 학습한 YOLO 기반 적혈구 탐지 모델을 브라우저에서 구현하는 방법을 소개합니다.',
    to: '/blog/yolo-onnx-object-detection-react-rbc',
  },
  {
    date: '2025-07-17',
    tag: 'ONNX · YOLO',
    title: '실시간 객체 탐지: React와 ONNX Runtime으로 YOLO 웹 앱 만들기',
    description: 'D-Lab Flow로 학습한 모델을 별도 서버 없이 브라우저에서 실행하는 방법을 소개합니다.',
    to: '/blog/yolo-onnx-object-detection-react',
  },
  {
    date: '2025-06-30',
    tag: '라벨링',
    title: 'AI 학습을 위한 이미지 라벨링, 실전 팁과 노하우까지 한눈에!',
    description: 'D-Lab Flow의 이미지 라벨링 기능을 활용해 AI 학습에 필요한 데이터를 만드는 방법을 소개합니다.',
    to: '/blog/annotation',
  },
  {
    date: '2025-06-18',
    tag: '컴퓨터비전 · 튜토리얼',
    title: '공개 데이터로 객체 탐지 AI 모델 만들기',
    description: 'PASCAL VOC 2012 공개 데이터셋으로 D-Lab Flow에서 객체 탐지 모델을 만드는 방법을 소개합니다.',
    to: '/blog/voc-classification',
  },
];

export default blogPosts;
