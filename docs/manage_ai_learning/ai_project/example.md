---
sidebar_position: 10
---

import ListAIProjectImg from './img/List-AI_Project.png';
import ListDatasetImg from './img/List-Dataset.png';
import InviteMembersImg from './img/Invite_Members.png';
import PrepareModelImg from './img/Prepare_Model.png';
import PrepareModelAdjustRatioImg from './img/Prepare_Model_Adjust_Ratio.png';
import ModalAdjustRatioImg from './img/Modal-Adjust_Ratio.png';
import DataAugmentationImg from './img/Data_Augmentation.png';
import ButtonPrepareModelImg from './img/Button-Prepare_Model.png';

# Example

## 학습 데이터 구성 설정
"**모델 준비**"를 클릭해 학습 데이터 구성 설정 페이지로 이동합니다.
  * **학습 파일 정보**: 선택한 데이터셋의 전체 파일수, 라벨링 수, 클래스 수 정보가 표시됩니다.
  
  * **학습/시험 데이터 분할**
    * 학습데이터, 검증데이터, 테스트데이터로 비율을 분배하여 학습하는 것은 기계 학습에서 일반적으로 사용되는 중요한 방법 중 하나입니다. 이 방법은 전체 데이터셋을 세 가지 서로 다른 세트로 나누어 사용함으로써 모델의 성능을 평가하고 개선하는 데 도움을 줍니다.
      * **학습 데이터(Training Data)**: 모델이 학습하는 데 사용되는 데이터입니다. 학습 데이터는 모델이 가중치를 조정하고 패턴을 파악하는 데 사용됩니다.

      * **검증 데이터(Validation Data)**: 학습 중에 모델의 성능을 평가하고 조정하기 위해 사용되는 데이터입니다. 학습 데이터로 학습한 모델을 검증 데이터로 평가하여 하이퍼파라미터를 조정하거나 모델의 일반화 성능을 확인합니다.

      * **테스트 데이터(Test Data)**: 모델의 최종 성능을 평가하기 위해 사용되는 데이터입니다. 학습된 모델이 처음 보는 데이터에 대해 얼마나 잘 수행되는지를 평가하는 데 사용됩니다.

    * 이러한 데이터 분할은 일반적으로 전체 데이터의 일정 비율로 나누어지며, 예를 들어 전체 데이터의 60\~80%가 학습 데이터, 10\~20%가 검증 데이터, 나머지 10\~20%가 테스트 데이터로 할당될 수 있습니다. 이 비율은 데이터의 규모와 특성에 따라 다를 수 있습니다.

  * **학습 데이터 증강**
    * 데이터 증강(Data Augmentation)은 기계 학습에서 사용되는 데이터의 양과 다양성을 늘리는 기술입니다. 이 기술은 주어진 데이터에 변형을 가하거나 변형된 데이터를 생성하여 학습 모델의 성능을 향상시키는 데 사용됩니다. 주로 이미지, 텍스트, 오디오 등의 데이터에서 사용됩니다.
    * 예를 들어, 이미지 데이터의 경우 데이터 증강 기술은 이미지를 회전, 이동, 확대/축소, 반전, 노이즈 추가 등의 방법으로 변형합니다. 이렇게 함으로써 모델은 더 다양한 상황에서 학습되고, 일반화 능력을 향상시킬 수 있습니다. 이는 모델이 특정 상황에 과적합되는 것을 방지하고, 실제 환경에서의 성능을 향상시키는 데 도움이 됩니다.


  <div style={{ textAlign: 'center' }}>
    <img src={PrepareModelImg} alt="모델 준비" style={{ width: '90%' }} />
  </div>

  <br />

### 데이터 비율 재설정
* 데이터 비율 변경이 필요한 경우, "**비율 재설정**" 버튼을 눌러 학습, 검증, 테스트 데이터의 비율을 재설정할 수 있습니다.

  <div style={{ textAlign: 'center' }}>
    <img src={PrepareModelAdjustRatioImg} alt="비율 재설정" style={{ width: '52%' }} />
  </div>

  <br />

  * 인공지능 학습에서 데이터 분할 비율은 매우 중요합니다. 이 비율은 모델의 성능을 평가하고 일반화 능력을 확보하기 위해 데이터를 적절히 분할하는 방법을 결정합니다. 잘못된 비율을 사용하면 다음과 같은 문제가 발생할 수 있습니다.
    * **과적합(Overfitting)**: 너무 많은 데이터를 학습용으로 사용하고 테스트 데이터가 부족할 경우, 모델은 학습 데이터에 너무 적합하게 되어 일반화 능력이 떨어질 수 있습니다. 이는 새로운 데이터에 대한 예측 성능이 저하되는 결과를 초래할 수 있습니다.
    * **과소적합(Underfitting)**: 반대로, 학습 데이터가 너무 적고 테스트 데이터가 많으면 모델이 충분히 학습하지 못해 성능이 낮을 수 있습니다. 이 경우 모델이 데이터의 패턴을 제대로 학습하지 못하게 됩니다.
    * **성능 평가의 불확실성**: 테스트 데이터가 충분하지 않으면 모델의 성능을 신뢰할 수 없게 됩니다. 작은 테스트 데이터 셋은 모델 성능 평가의 변동성을 증가시켜, 모델이 실제 환경에서 얼마나 잘 작동할지를 정확하게 예측하기 어렵게 합니다.
  
  <br />

 * "**비율 재설정**" 모달 창이 나타나면 슬라이드 레버를 이동시켜 학습, 검증, 시험 데이터의 비율을 조절하고 "**저장**" 버튼을 눌러 비율 재설정을 완료합니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ModalAdjustRatioImg} alt="비율 재설정 모달" style={{ width: '45%' }} />
  </div>

  <br />

### 학습 데이터 증강
* 학습 데이터 증강은 데이터셋에 포함된 기존 데이터에 다양한 증강 기법을 적용하는 단계입니다. 사용을 원할 경우, 적용하고자 하는 증강 옵션을 체크(다중체크 가능)합니다.

* D-Lab Flow에서는 다음과 같은 증강 기능을 지원합니다.
  * **이미지 좌우 반전**
  * **이미지 상하 반전**
  * **이미지 90° 회전 (우측)**
  * **이미지 180° 회전 (우측)**
  * **이미지 270° 회전 (우측)**

  <div style={{ textAlign: 'center' }}>
    <img src={DataAugmentationImg} alt="학습 데이터 증강" style={{ width: '50%' }} />
  </div>

  <br />

"**모델 준비**" 버튼을 눌러 **버전 생성**을 완료 합니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ButtonPrepareModelImg} alt="모델 준비 버튼" style={{ width: '43%' }} />
  </div>

  <br />


Dlab Flow를 사용하여 AI 모델을 학습시키고 관리하는 방법을 단계별로 안내합니다.

## 1단계: 학습에 사용할 데이터셋 선택하기

먼저 AI 모델 학습에 사용할 데이터셋을 선택해야 합니다.

1.  **프로젝트 접속:** 작업하려는 프로젝트 페이지로 이동합니다.
2.  **'데이터셋 선택' 메뉴 클릭:** 화면 좌측의 메뉴에서 **'데이터셋 선택'** 을 클릭합니다.
3.  **데이터셋 활성화:** 사용 가능한 데이터셋 목록이 나타납니다. 학습에 사용하고 싶은 데이터셋 옆의 토글 스위치를 켜서 **활성화**합니다.
    *   하나 이상의 데이터셋을 선택할 수 있습니다.
    *   활성화된 데이터셋의 데이터가 학습에 사용됩니다.

## 2단계: 학습 설정 및 모델 생성 준비하기

선택한 데이터셋을 이용하여 모델 학습을 어떻게 진행할지 설정합니다.

1.  **'모델 생성' 메뉴 클릭:** 화면 좌측의 메뉴에서 **'모델 생성'** 을 클릭합니다.
2.  **클래스 확인:** '데이터셋 선택' 단계에서 활성화한 데이터셋에 포함된 클래스(데이터 종류) 목록이 나타납니다. 학습에 사용될 클래스가 맞는지 확인합니다.
3.  **학습/시험 데이터 비율 설정:** 전체 데이터를 학습용과 시험(모델 성능 검증용)으로 나눌 비율을 슬라이더를 이용해 조절합니다. (예: 학습 80% / 시험 20%)
    *   옆에는 설정된 비율에 따른 예상 데이터 개수가 표시됩니다.
4.  **(선택) 데이터 증강:** 이미지 데이터의 경우, '데이터 증강(Data Augmentation)' 옵션을 선택하여 학습 데이터의 양과 다양성을 높일 수 있습니다.
    *   원하는 증강 기법(회전, 좌우반전 등)을 선택하고 적용할 횟수를 설정합니다.
    *   증강 적용 시 예상되는 총 학습 데이터 개수가 업데이트됩니다.
5.  **'생성' 버튼 클릭:** 모든 설정이 완료되었으면 화면 하단의 **'생성'** 버튼을 클릭합니다. 설정된 구성으로 새로운 모델 버전이 생성되고 학습을 진행할 준비가 완료됩니다.

## 3단계: 모델 학습 실행 및 관리하기

생성된 모델 버전을 이용하여 실제 AI 학습을 시작하고 진행 상황을 모니터링합니다.

1.  **'버전 관리' 메뉴 클릭:** 화면 좌측의 메뉴에서 **'버전 관리'** 를 클릭합니다. '모델 생성' 단계에서 생성된 버전을 포함하여 이 프로젝트에서 생성된 모든 모델 버전 목록이 나타납니다.
2.  **학습 시작:**
    *   목록에서 학습을 시작할 모델 버전을 찾습니다. (보통 가장 최근에 생성된 버전입니다.)
    *   해당 버전 정보 영역 우측 상단에 있는 **'학습' 버튼** (로켓 모양 아이콘일 수 있음)을 클릭합니다.
    *   버튼 클릭 시 학습이 시작됩니다.
3.  **학습 진행 상황 확인:**
    *   학습이 시작되면 해당 버전의 상태 표시줄에 **'학습중'** 이라는 텍스트와 함께 **진행률(%)** 이 표시됩니다.
    *   **학습 시작 시간**과 **경과 시간**도 함께 표시되어 얼마나 오래 학습이 진행 중인지 알 수 있습니다.
    *   만약 학습 중 오류가 발생하면 상태가 **'오류'** 로 표시될 수 있습니다.
4.  **학습 완료 확인:**
    *   학습이 성공적으로 끝나면 상태가 **'학습완료'** 로 변경됩니다.
    *   우측 상단 알림 메뉴를 통해 학습 완료 알림을 받을 수도 있습니다.
    *   완료된 버전 정보에서 최종 성능 지표(있을 경우)를 확인할 수 있습니다.
5.  **버전 관리:** 이 화면에서 여러 모델 버전의 생성 시각, 학습 상태, 학습 데이터 비율 등을 확인하고 관리할 수 있습니다.

## 4단계: 학습된 모델 배포하기

학습이 완료된 AI 모델을 실제 서비스나 테스트 환경에서 사용할 수 있도록 배포합니다.

1.  **'모델 배포' 메뉴 클릭:** 화면 좌측의 메뉴에서 **'모델 배포'** 를 클릭합니다.
2.  **배포할 버전 선택:** '버전 관리' 메뉴에서 학습이 완료된 모델 버전 목록이 나타납니다. 배포하고 싶은 모델 버전을 선택합니다.
    *   학습이 완료되지 않았거나 오류가 발생한 버전은 선택할 수 없습니다.
3.  **'배포' 버튼 클릭:** 배포하려는 버전 정보 영역에서 **'배포' 버튼**을 클릭합니다.
4.  **배포 상태 확인:** 배포가 진행되고 완료되면 해당 버전의 상태가 업데이트됩니다. 이 화면에서 현재 어떤 버전이 배포되어 사용 중인지 확인할 수 있습니다.

---

**도움이 필요하신가요?**

화면의 구성이나 버튼 이름이 약간 다를 수 있습니다. 기능을 사용하는 데 어려움이 있거나 궁금한 점이 있다면 시스템 관리자에게 문의해 주세요.

Docusaurus can manage multiple versions of your docs.

## Create a docs version

Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## Add a Version Dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
