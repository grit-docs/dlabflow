---
sidebar_position: 5
---

import EvaluateModelReadyImg from './img/Evaluate_Model_Ready.png';
import ButtonUploadImageImg from './img/Button-Upload_Image.png';
import FileSearchWindowImg from './img/File_Search_Window.png';
import EvaluateModelInferencingImg from './img/Evaluate_Model_Inferencing.png';
import EvaluateModelCompleteImg from './img/Evaluate_Model_Complete.png';
import ButtonEvaluatedImageImg from './img/Button-Evaluated_Image.png';
import ModalEvaluatedImageImg from './img/Modal-Evaluated_Image.png';
import ButtonDownloadResultImg from './img/Button-Download_Result.png';
import EvaluatedResultDownloadCompletionImg from './img/Evaluated_Result_Download_Completion.png';

# 모델 평가하기

## 모델 평가
* 데이터를 업로드해 학습이 완료된 모델의 성능을 평가할 수 있습니다.
    * 한번에 최대 10개의 이미지 파일을 업로드하여 모델을 평가할 수 있습니다.

      <div style={{ textAlign: 'center' }}>
          <img src={EvaluateModelReadyImg} alt="모델 평가 - 준비" style={{ width: '100%' }} />
      </div>

      <br />

### 이미지 업로드
* "**이미지 업로드**" 버튼을 눌러 **파일 탐색창**을 엽니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ButtonUploadImageImg} alt="모델 평가 - 이미지 업로드" style={{ width: '50%' }} />
  </div>

  <br />

* **파일 탐색창**이 열리면 모델 평가에 사용할 이미지를 선택한 후 **열기** 버튼을 눌러 파일을 업로드 합니다.

  <div style={{ textAlign: 'center' }}>
    <img src={FileSearchWindowImg} alt="모델 평가 - 파일 탐색창" style={{ width: '65%' }} />
  </div>

  <br />

* 파일 업로드와 함께 업로드한 이미지에 대해 **평가**가 **진행**됩니다. 

  <div style={{ textAlign: 'center' }}>
    <img src={EvaluateModelInferencingImg} alt="모델 평가 - 추론 진행중" style={{ width: '100%' }} />
  </div>

  <br />

### 모델 평가 결과
* 평가가 완료되면 업로드한 이미지에 평가 결과 정보가 추가되어 이미지가 출력됩니다.

  <div style={{ textAlign: 'center' }}>
    <img src={EvaluateModelCompleteImg} alt="모델 평가 - 추론 완료" style={{ width: '100%' }} />
  </div>

  <br />

    * 평가 완료된 결과의 **썸네일 이미지**를 **클릭**하여 평가 결과를 자세히 확인할 수 있습니다.

        <div style={{ textAlign: 'center' }}>
          <img src={ButtonEvaluatedImageImg} alt="모델 평가 - 추론 완료 썸네일 이미지" style={{ width: '25%' }} />
        </div>

        <br />

    * 선택한 평가 결과를 모달창에서 확인합니다.

        <div style={{ textAlign: 'center' }}>
          <img src={ModalEvaluatedImageImg} alt="모델 평가 - 추론 완료 모달창" style={{ width: '95%' }} />
        </div>

        <br />

### 결과 다운로드
* 평가 완료된 결과를 **파일**로 **다운로드** 할 수 있습니다.
* 다운로드 파일은 압축파일(**zip**) 형태로 다운로드되며, 압축 해제하여 평가 결과 이미지를 확인할 수 있습니다.

* 결과 파일을 다운로드하기 위해 "**결과 다운로드**" 버튼을 누릅니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ButtonDownloadResultImg} alt="모델 평가 - 결과 다운로드" style={{ width: '25%' }} />
  </div>

  <br />

* 다운로드된 결과는 압축해제하여 확인할 수 있습니다.

  <div style={{ textAlign: 'center' }}>
    <img src={EvaluatedResultDownloadCompletionImg} alt="모델 평가 - 결과 다운로드 확인" style={{ width: '45%' }} />
  </div>

  <br />
