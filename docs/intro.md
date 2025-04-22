---
sidebar_position: 1
---

# 빠르게 시작하기

**D-Lab-Flow**는 컴퓨터 비전 솔루션을 구축하는 데 필요한 라벨링, 학습, 배포 기능을 모두 제공합니다.

이 가이드를 통해 귀하의 사용 사례에 최적화된 컴퓨터 비전 모델을 손쉽게 만들 수 있습니다.

이번 빠른 시작 튜토리얼은 약 5분 분량의 영상으로, 비전 모델을 사용해 여러 객체를 식별하는 방법을 단계별로 안내합니다.

지금 바로 따라 하며, 컴퓨터 비전의 첫걸음을 시작해 보세요.

## 빠른 시작 튜토리얼 (5분)
---

<iframe width="100%" height="540" src="https://www.youtube.com/embed/CS2efNY_99g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

이거 예전꺼라 다시 만들어야함...


### 데이터 저장소 생성
---
[![intro_1](./intro/img/intro_1.png)]

D-Lab Flow에서는 학습 데이터를 체계적으로 관리하기 위해 데이터 저장소를 먼저 생성해야 합니다.

데이터 저장소는 학습에 필요한 파일을 업로드하고 관리하는 공간입니다.



:::tip My tip

<Highlight color="rgb(24, 144, 255)">저장소 생성</Highlight>버튼을 클릭한 후 아래 정보를 입력하여 저장소를 생성합니다.

- `저장소 이름(필수)` 저장소를 구분할 수 있는 명확한 이름을 입력합니다
- `해시태그(필수)` 저장소를 식별하거나 검색할 수 있는 키워드를 입력합니다.
- `파일 타입` 현재는 이미지 파일만 업로드가 가능합니다.

:::

### 이미지파일 업로드
---
![Locale Dropdown](./intro/img/intro_2.png)

생성한 데이터 저장소에 학습에 사용할 이미지 파일을 업로드합니다.

지원 포맷은 .jpg, .png, .bmp 이며, 여러 장을 동시에 업로드할 수 있습니다.

→ 데이터 업로드 페이지에서 "업로드" 버튼을 눌러 파일 혹은 폴더를 선택하여 업로드합니다.

:::tip My tip



<Highlight color="rgb(24, 144, 255)">업로드</Highlight>버튼을 클릭한 후 학습에 사용할 이미지 파일을 업로드하세요.

- `업로드 파일` 파일을 개별로 선택하여 업로드합니다.
- `업로드 폴더` 하위 이미지 파일을 포함한 폴더 전체를 선택하여 업로드합니다. 

:::

### 데이터셋 생성 및 라벨링
![Locale Dropdown](./intro/img/localeDropdown.png)

데이터 저장소를 바탕으로 데이터셋을 생성합니다.

또한 라벨링 툴을 이용해 직접 라벨을 수정하거나 새로 추가할 수도 있습니다.

→ "데이터셋 생성" 버튼 클릭 → 라벨링 작업 선택 → 필요 시 라벨 편집 도구로 직접 수정.

### 라벨링정보 파일 업로드
![Locale Dropdown](./intro/img/localeDropdown.png)

라벨링 정보 파일은 이미지에 어떤 객체가 있는지, 위치가 어디인지 등을 정의한 파일입니다.

D-Lab Flow는 Pascal VOC 포맷을 지원합니다.

→ "데이터셋 관리" → "저장소 선택" → "라벨링 정보 업로드" 버튼을 눌러 파일 혹은 폴더를 선택하여 업로드한 이미지와 매칭되는 라벨 파일을 업로드하세요.

### 프로젝트 생성 및 모델 학습
![Locale Dropdown](./intro/img/localeDropdown.png)

데이터셋을 기반으로 프로젝트를 생성하고, 원하는 AI 모델을 선택하여 학습을 시작합니다.

기본 제공되는 사전 설정 모델을 선택할 수 있습니다.

→ "프로젝트 생성" 버튼을 클릭하고, 프로젝트 이름, 타입, 해시태그, 메모등을 입력하여 생성합니다.

### 모델 테스트
![Locale Dropdown](./intro/img/localeDropdown.png)

학습이 완료되면, 테스트 이미지를 이용해 모델의 성능을 평가할 수 있습니다.

모델은 테스트 이미지에 대한 예측 결과를 시각적으로 보여주며, 라벨과 비교하여 정확도를 확인할 수 있습니다.

→ 모델평가 → 이미지 업로드 → 결과 비교 및 성능 확인.


export const Highlight = ({children, color}) => (
<span
style={{
border: `2px solid ${color}`,
borderRadius: '5px',
color: color,
padding: '3px',
cursor: 'pointer',
backgroundColor: 'white', // 배경을 투명하게 설정
}}>
{children}
</span>
);

