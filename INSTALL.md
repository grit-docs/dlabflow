# 설치 및 실행 가이드

## 1. Node.js 설치

아래 링크에서 Node.js를 설치합니다.

- [Node.js 다운로드](https://nodejs.org/ko/download)

## 2. 설치 확인

Node.js가 정상적으로 설치되었는지 확인합니다.

```bash
node -v
```

## 3. Yarn 설치 및 버전 확인

먼저 Yarn 설치 여부를 확인합니다.

```bash
yarn -v
```

Yarn이 설치되어 있지 않다면 다음 명령어로 설치합니다.

```bash
npm install -g yarn
```

## 4. 의존성 설치

프로젝트 루트 디렉터리에서 의존성을 설치합니다.

```bash
yarn install
```

## 5. 개발 서버 실행

다음 명령어 중 하나를 사용해 개발 서버를 실행합니다.

```bash
yarn start
```

또는

```bash
npm start
```
