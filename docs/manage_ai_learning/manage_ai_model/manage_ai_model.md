---
sidebar_position: 1
---

import ManageAIModelImg from './img/Manage_AI_Model.png';
import ButtonPerformanceFilterImg from './img/Button-Performance_Filter.png';
import ModalConfigPerformanceFilterImg from './img/Modal-Config_Performance_Filter.png';
import ListFilteredAIModelImg from './img/List-Filtered_AI_Model.png';
import ButtonResetFilterImg from './img/Button-Reset_Filter.png';
import ButtonDownloadModelWeightImg from './img/Button-Download_Model_Weight.png';
import ModalDownloadModelWeightImg from './img/Modal-Download_Model_Weight.png';
import ModalCompleteDownloadModelWeightImg from './img/Modal-Complete_Download_Model_Weight.png';
import BrowserCompleteDownloadModelWeightImg from './img/Browser-Complete_Download_Model_Weight.png';
import ListModelWeightFileImg from './img/List-Model_Weight_File.png';
import SharedModelWeightImg from './img/Shared_Model_Weight.png';

# AI 모델 관리하기
## AI 모델 관리
* AI 모델 관리 화면에서는 학습이 완료된 모델의 성능을 확인하고 다운로드할 수 있습니다.
  <div style={{ textAlign: 'center' }}>
    <img src={ManageAIModelImg} alt="AI 모델 관리 페이지" style={{ width: '100%' }} />
  </div>

  <br />

### AI 모델 필터 사용
조건 설정을 통해 AI 모델을 찾기를 원한다면 **성능 필터**를 사용해 AI 모델을 리스트할 수 있습니다.
* "**성능 필터**" 버튼을 눌러 **성능 필터 설정**창을 엽니다. 
  <div style={{ textAlign: 'center' }}>
    <img src={ButtonPerformanceFilterImg} alt="AI 모델 필터링" style={{ width: '20%' }} />
  </div>

  <br />

* "**성능 필터 설정**"창에서 **평균정밀도**, **정밀도**, **재현율** 범위를 설정하고 확인 버튼을 눌러 설정을 완료합니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ModalConfigPerformanceFilterImg} alt="AI 모델 필터 설정" style={{ width: '40%' }} />
  </div>

  <br />

* **필터** 설정이 적용된 AI 모델 리스트가 표시되며, 노란색으로 표시된 "**성능 필터**" 버튼은 현재 리스트가 필터가 적용된 AI 모델 리스트임을 나타냅니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ListFilteredAIModelImg} alt="필터링된 AI 모델 리스트" style={{ width: '100%' }} />
  </div>

  <br />

* "**필터 초기화**" 버튼을 누르면 필터 설정하기 이전 상태의 모든 AI 모델 리스트가 출력됩니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ButtonResetFilterImg} alt="필터 초기화" style={{ width: '15%' }} />
  </div>

  <br />

### AI 모델 가중치 다운로드
* 조작 항목에서 "**모델 가중치 다운로드**" 버튼을 눌러 **모델 가중치 다운로드**창을 엽니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ButtonDownloadModelWeightImg} alt="모델가중치 다운로드 버튼" style={{ width: '25%' }} />
  </div>

  <br />

* **모델 가중치 다운로드**창에서 다운로드할 모델을 선택하고 **다운로드** 버튼을 누르면 다운로드가 시작됩니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ModalDownloadModelWeightImg} alt="모델가중치 다운로드창" style={{ width: '45%' }} />
  </div>

  <br />

* AI 모델 가중치의 다운로드가 완료되면 **완료**가 출력됩니다.

  <div style={{ textAlign: 'center' }}>
    <img src={ModalCompleteDownloadModelWeightImg} alt="모델가중치 다운로드 완료" style={{ width: '40%' }} />
  </div>

* 웹브라우저에서도 AI 모델 가중치 파일의 **다운로드 완료**를 확인할 수 있습니다.

  <div style={{ textAlign: 'center' }}>
    <img src={BrowserCompleteDownloadModelWeightImg} alt="브라우저 모델가중치 다운로드 완료" style={{ width: '35%' }} />
  </div>


  <br />

* **모델 가중치**는 **7-Zip** 형식의 압축 파일로 다운로드되며, 압축 파일을 해제하면 **모델 가중치 파일**을 확인할 수 있습니다. 

  <div style={{ textAlign: 'center' }}>
    <img src={ListModelWeightFileImg} alt="모델가중치 파일 리스트" style={{ width: '35%' }} />
  </div>


  <br />

### 공유된 AI 모델 가중치
* **공유** 버튼을 누르면 **공유**된 **AI 모델 가중치** 파일 리스트를 확인할 수 있으며, 소유한 AI 모델 가중치 관리와 동일한 방식으로 설정 및 다운로드할 수 있습니다.

  <div style={{ textAlign: 'center' }}>
    <img src={SharedModelWeightImg} alt="공유 모델 가중치" style={{ width: '90%' }} />
  </div>


  <br />