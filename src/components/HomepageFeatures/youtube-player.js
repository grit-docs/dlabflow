// YouTube Player API 로드
let player;

// YouTube API 로드
function loadYouTubeAPI() {
  if (typeof window !== 'undefined') {
    // 이미 API가 로드되었는지 확인
    if (window.YT) {
      initPlayer();
      return;
    }

    // API 로드 스크립트 생성
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // API 로드 완료 시 호출되는 함수
    window.onYouTubeIframeAPIReady = initPlayer;
  }
}

// 플레이어 초기화
function initPlayer() {
  if (typeof window !== 'undefined' && window.YT && document.getElementById('youtubePlayer')) {
    player = new window.YT.Player('youtubePlayer', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
}

// 플레이어 준비 완료 이벤트
function onPlayerReady(event) {
  console.log('Player is ready');
}

// 플레이어 상태 변경 이벤트
function onPlayerStateChange(event) {
  // 상태 변경 시 필요한 로직 구현
}

// 특정 시간으로 이동하는 함수
function seekToTime(seconds) {
  if (player && typeof player.seekTo === 'function') {
    player.seekTo(seconds, true);
    player.playVideo();
  } else {
    console.log('Player not ready yet');
  }
}

// 컴포넌트 마운트 시 API 로드
function initYouTubePlayer() {
  if (typeof window !== 'undefined') {
    // 페이지 로드 후 실행
    if (document.readyState === 'complete') {
      loadYouTubeAPI();
    } else {
      window.addEventListener('load', loadYouTubeAPI);
    }

    // 클린업 함수
    return () => {
      window.removeEventListener('load', loadYouTubeAPI);
    };
  }
}

export { loadYouTubeAPI, seekToTime, initYouTubePlayer };
