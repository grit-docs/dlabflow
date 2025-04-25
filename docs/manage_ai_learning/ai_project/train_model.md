---
sidebar_position: 4
---

import TrainModelPreprocessingImg from './img/Train_Model_Preprocessing.png';
import StatusPreprocessingDataImg from './img/Status-Preprocessing_Data.png';
import ListTrainModelImg from './img/List-Train_Model.png';
import TrainModelReadyImg from './img/Train_Model_Ready.png';
import SetHyperparameterImg from './img/Set-Hyperparameter.png';
import SetBatchSizeImg from './img/Set-Batch_Size.png';
import SetEpochSizeImg from './img/Set-Epoch_Size.png';
import ButtonStartTrainImg from './img/Button-Start_Train.png';
import TrainModelStartImg from './img/Train_Model_Start.png';
import StatusTrainSetInfraImg from './img/Status-Train_Set_Infra.png';
import StatusTrainingImg from './img/Status-Training.png';
import TrainModelCompleteImg from './img/Train_Model_Complete.png';
import ButtonSupplementaryMetricImg from './img/Button-Supplementary_Metric.png';
import ViewSupplementaryMetricInferenceResultImg from './img/View-Supplementary_Metric_Inference_Result.png';
import ViewSupplementaryMetricMetricsChartImg from './img/View-Supplementary_Metric_Metrics_Chart.png';
import VersionTitlebarImg from './img/Version_Titlebar.png';
import ButtonModelEvaluationImg from './img/Button-Model_Evaluation.png';
import ModifiedVersionNameImg from './img/Modified_Version_Name.png';
import ModalDeleteVersionImg from './img/Modal-Delete_Version.png';
import ModalModifyVersionNameImg from './img/Modal-Modify_Version_Name.png';

# 모델 훈련하기

## 모델 훈련
* "**버전 생성**" 과정을 완료하면 "**모델 훈련**" 페이지로 이동합니다.

  <div style={{ textAlign: 'center' }}>
    <img src={TrainModelPreprocessingImg} alt="모델 훈련 - 전처리중" style={{ width: '100%' }} />
  </div>

  <br />

* "**버전 생성**" 완료 직후는 데이터 전처리 진행 중이므로 아래와 같이 "**데이터 전처리중...**" 상태를 나타내며, 데이터 전처리가 완료되면 "**인공지능 학습 시작**" 버튼이 활성화 되고, "**학습/시험 데이터 분할**"에 데이터 전처리가 반영된 데이터 수량을 확인할 수 있습니다.

  <br />

  <div style={{ textAlign: 'center' }}>
    <img src={StatusPreprocessingDataImg} alt="데이터 전처리중" style={{ width: '52%' }} />
  </div>

  <br />

* "**모델 훈련**"의 **버전 목록** 및 **타이틀바**에는 새로 생성된 버전의 버전명(**V_0**)이 표시됩니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ListTrainModelImg} alt="모델 훈련 리스트" style={{ width: '70%' }} />
  </div>

  <br />

* "**데이터 전처리**"가 완료되면 아래와 같이 "**인공지능 학습 시작**"이 가능한 상태가 됩니다.

  <div style={{ textAlign: 'center' }}>
    <img src={TrainModelReadyImg} alt="모델 훈련 - 준비" style={{ width: '100%' }} />
  </div>

  <br />

### 하이퍼 파라미터 설정
"**인공지능 학습 시작**"을 수행하기 전에 하이퍼 파라미터를 설정할 수 있습니다.
* **모델 선택**
  * 모델 리스트에서 훈련에 사용할 모델을 선택합니다.
    * D-Lab Flow에서는 다음과 같은 모델을 지원합니다.
      * **YOLO** (You Only Look Once)
        * 객체 감지 및 분류를 위한 신경망 기반 알고리즘으로, 이미지를 한 번에 처리하여 객체를 식별합니다.
          * **YOLO v5**
          * **YOLO v5 Small**
          * **YOLO v5 Medium**
          * **YOLO v5 Large**
          * **YOLO v5 XLarge**
          * **YOLO v8**
          * **YOLO v8 Small**
          * **YOLO v8 Medium**
          * **YOLO v8 Large**
          * **YOLO v8 XLarge**
      * **EfficientDet**
        * 다양한 크기와 자원 제약에 맞게 모델을 조정하여 높은 정확도와 효율적인 계산 성능을 제공합니다. 다만, 모델 학습 시간이 YOLO 보다 상대적으로 길고, 모델 크기가 커질수록 이미지 해상도가 달라져 처리 속도와 정확도에 영향을 미칠 수 있습니다.
          * **EfficientDet D0** (512x512)
          * **EfficientDet D1** (640x640)
          * **EfficientDet D2** (768x768)
          * **EfficientDet D3** (896x896)
          * **EfficientDet D4** (1024x1024)
          * **EfficientDet D5** (1280x1280)
          * **EfficientDet D6** (1408x1408)
          * **EfficientDet D7** (1536x1536)

  <div style={{ textAlign: 'center' }}>
    <img src={SetHyperparameterImg} alt="하이퍼파라미터 설정 - 모델 선택" style={{ width: '65%' }} />
  </div>

  <br />

* **배치 크기**
  * 기계 학습에서 배치 사이즈는 한 번에 처리하는 데이터의 양을 의미합니다. 이 값은 모델을 학습할 때 한 번에 몇 개의 데이터 샘플을 사용하여 가중치를 업데이트할지를 결정합니다.

  <div style={{ textAlign: 'center' }}>
    <img src={SetBatchSizeImg} alt="하이퍼파라미터 설정 - 배치 크기" style={{ width: '65%' }} />
  </div>

  <br />
  
* **훈련 횟수**
  * 기계 학습에서 훈련횟수(epoch,에폭)은 모델이 전체 데이터셋을 한 번 모두 학습하는 과정을 의미합니다. 즉, 모든 데이터를 한 번씩 다 사용해서 학습을 완료하는 것을 1 에폭이라고 합니다.

  <div style={{ textAlign: 'center' }}>
    <img src={SetEpochSizeImg} alt="하이퍼파라미터 설정 - 훈련 횟수" style={{ width: '65%' }} />
  </div>

  <br />
  
하이퍼 파라미터 설정이 완료됐으면, "**인공지능 학습 시작**" 버튼을 눌러 학습을 시작합니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ButtonStartTrainImg} alt="인공지능 학습 시작" style={{ width: '65%' }} />
  </div>

  <br />

### 인공지능 학습
* **인공지능 학습 시작**
  * 인공지능 학습이 시작되면 "**학습 진행 상태**"바가 활성화되고, 학습 진행 상태 정보를 출력합니다.

  <div style={{ textAlign: 'center' }}>
    <img src={TrainModelStartImg} alt="인공지능 학습 시작" style={{ width: '100%' }} />
  </div>

  * 학습을 시작한 바로 이후에는 "**학습 진행 상태**"에 "**학습 인프라 구성중**" 메시지가 출력됩니다.

  <div style={{ textAlign: 'center' }}>
    <img src={StatusTrainSetInfraImg} alt="인공지능 학습 상태 - 학습 인프라 구성중" style={{ width: '65%' }} />
  </div>

  <br />

  * 학습 인프라 구성이 완료되면 "**학습 진행중**" 메시지와 함께 진행 상태바에 **현재 진행률**을 표시합니다.

  <div style={{ textAlign: 'center' }}>
    <img src={StatusTrainingImg} alt="인공지능 학습 상태 - 학습 진행중" style={{ width: '65%' }} />
  </div>

  <br />

* **인공지능 학습 완료**
  * 인공지능 학습이 완료되면 "**모델 평가 지표"**"에서 생성한 모델의 성능을 확인할 수 있습니다.
    <div style={{ textAlign: 'center' }}>
      <img src={TrainModelCompleteImg} alt="인공지능 학습 완료" style={{ width: '100%' }} />
    </div>

    <br />

    * **평균정밀도**
      * mAP는 "평균 정밀도(mean Average Precision)"의 약자로, 객체 탐지(Object Detection)나 객체 인식(Object Recognition) 분야에서 사용되는 중요한 성능 지표 중 하나입니다. 이 지표는 모델이 탐지한 객체들의 정확도와 관련이 있습니다.
      * 여기서 "정밀도(Precision)"란 모델이 찾은 객체 중 실제로 정확한 객체의 비율을 의미하며 "평균 정밀도"는 이 정밀도를 모든 클래스에 대해 평균화한 값입니다.
      * mAP는 주로 객체 탐지 작업에서 사용되는데, 이 작업에서는 모델이 이미지에서 여러 객체를 찾고, 각 객체가 올바르게 탐지되었는지를 판단합니다. mAP는 모델이 여러 클래스의 객체를 얼마나 잘 발견하고 정확하게 식별하는지를 종합적으로 평가합니다.
      * 예를 들어, 자동차 탐지 모델이 특정 이미지에서 10대의 자동차를 발견했다고 가정할 때, 실제로 이 중 8대가 자동차이고 2대가 자전거라면 이 모델의 정밀도는 8/10 = 0.8입니다. 이것이 한 클래스(자동차)에 대한 정밀도입니다. 이제 다른 클래스(자전거)에 대한 정밀도도 계산하여 이들을 평균화한 값을 구합니다. 이것이 mAP입니다.

    * **정밀도**
      * 정밀도 (Precision)는 머신러닝에서 모델의 예측 성능을 평가할 때 사용되는 중요한 지표입니다. 특히 분류 문제에서 많이 사용됩니다. 간단히 말해, 정밀도는 모델이 긍정(positive)으로 예측한 항목들 중 실제로도 긍정인 항목의 비율을 나타냅니다.
      * 정밀도를 이해하기 위해 암 진단 예를 들어보겠습니다. 모델이 암 환자를 진단한다고 가정한다면:
        * True Positive (TP): 모델이 암이라고 예측했고, 실제로도 암인 경우
        * False Positive (FP): 모델이 암이라고 예측했지만, 실제로는 암이 아닌 경우
      * 정밀도는 모델이 암이라고 예측한 사례 중에서 실제로 암인 사례의 비율입니다. 정밀도가 높다면, 모델이 암이라고 예측한 경우는 대부분 실제로 암인 경우입니다.

    * **재현율**
      * 재현율 (Recall)은 머신러닝에서 모델의 예측 성능을 평가할 때 사용되는 중요한 지표 중 하나입니다. 분류 문제에서 특히 많이 사용됩니다. 간단히 말해, 재현율은 실제로 긍정인 항목들 중 모델이 긍정으로 올바르게 예측한 비율을 나타냅니다.
      재현율을 이해하기 위해 암 진단 예를 들어보겠습니다. 모델이 암 환자를 진단한다고 가정한다면:
        * True Positive (TP): 모델이 암이라고 예측했고, 실제로도 암인 경우
        * False Negative (FN): 모델이 암이 아니라고 예측했지만, 실제로는 암인 경우
      * 재현율은 실제로 암인 사례 중에서 모델이 암이라고 올바르게 예측한 사례의 비율입니다. 재현율이 높다면, 실제로 암인 사람을 모델이 거의 놓치지 않고 잘 찾아낸다는 의미입니다.


  * 학습 결과에 대한 추가 정보를 얻기를 원한다면 "**추가 지표**" 버튼을 눌러 **검증 데이터 추론 결과**와 **Metrics 차트**를 확인할 수 있습니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ButtonSupplementaryMetricImg} alt="인공지능 학습 완료 - 추가지표" style={{ width: '40%' }} />
  </div>

  <br />

    * **검증 데이터 추론 결과**
      * 검증 데이터 추론 결과의 목적은 검증 데이터를 사용하여 학습된 모델이 과적합(Overfitting)되지 않고 일반화가 잘 되지는 파악하기 위해서이며, 경계 상자에서 숫자가 의미하는 것은 객체의 속성 클래스를 잘 예측하는지 확인하는 신뢰도 점수로 1에 가까울수록 탐지 성능이 우수하다고 볼 수 있습니다.

        <div style={{ textAlign: 'center' }}>
          <img src={ViewSupplementaryMetricInferenceResultImg} alt="인공지능 학습 완료 - 추가지표 - 검증 데이터 추론 결과" style={{ width: '100%' }} />
        </div>

        <br />

    * **Metrics 차트**
      * Bounding Box Loss는 객체 탐지 모델이 예측한 경계 상자와 실제 경계 상자 사이의 차이를 측정한 손실 함수로 0에 가까울수록 오차가 적어 예측이 잘되었다고 볼 수 있습니다.

        <div style={{ textAlign: 'center' }}>
          <img src={ViewSupplementaryMetricMetricsChartImg} alt="인공지능 학습 완료 - 추가지표 - Metrics 차트" style={{ width: '100%' }} />
        </div>

        <br />

### 버전 이름 변경
* "**타이틀바**" 우측에 "**펜**"아이콘을 클릭해 버전명을 **변경**할 수 있습니다. 

  <div style={{ textAlign: 'center' }}>
    <img src={VersionTitlebarImg} alt="버전 타이틀바" style={{ width: '65%' }} />
  </div>

  <br />

* **버전 이름 변경**
  * **이름 변경** 버튼을 누르면, **버전 이름 변경** 모달창이 출력됩니다.
  * **버전 이름 변경** 모달창에서 원하는 **버전명**으로 변경 후 **저장** 버튼을 누르면 버전 이름이 **변경**됩니다.

    <div style={{ textAlign: 'center' }}>
      <img src={ModalModifyVersionNameImg} alt="버전 이름 변경 모달창" style={{ width: '40%' }} />
    </div>

    <br />

  * 변경된 버전 이름은 **버전 목록**과 **버전 타이틀바**에서 확인할 수 있습니다.

    <div style={{ textAlign: 'center' }}>
      <img src={ModifiedVersionNameImg} alt="변경된 버전 이름" style={{ width: '95%' }} />
    </div>

    <br />

### 버전 삭제
* "**타이틀바**" 우측에 "**휴지통**"아이콘을 클릭해 버전을 **삭제**할 수 있습니다. 

  <div style={{ textAlign: 'center' }}>
    <img src={VersionTitlebarImg} alt="버전 타이틀바" style={{ width: '65%' }} />
  </div>

  <br />
    
* **버전 삭제**
  * **삭제** 버튼을 누르면, **버전 삭제** 모달창이 출력됩니다.
  * 모달창에서 "**예**" 버튼을 누르면 현재 선택된 버전이 **삭제**됩니다. 

    <div style={{ textAlign: 'center' }}>
      <img src={ModalDeleteVersionImg} alt="버전 삭제 모달창" style={{ width: '40%' }} />
    </div>

    <br />
      
"**모델 평가**" 버튼을 눌러 **모델 평가** 페이지로 이동할 수 있습니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ButtonModelEvaluationImg} alt="인공지능 학습 완료 - 모델 평가" style={{ width: '17%' }} />
  </div>

  <br />