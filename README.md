# 원티드 프리온보딩 프론트엔드 4주차 과제

## 개요

원티드 프리온보딩 프론트엔드 4주차 과제 리포지토리입니다.
mock-data.json의 데이터를 bar 차트와 area 차트로 나타내고, bar에 호버 시 툴팁 표시 기능과 특정 지역의 bar를 강조해서 표시해주는 기능이 있습니다.

## 배포 주소

[https://wanted-4th-week-ofcpire.netlify.app](https://wanted-4th-week-ofcpire.netlify.app/)

## 실행 방법

```
git clone https://github.com/ofcpire/wanted-4th-week.git
cd wanted-4th-week
npm install
npm start
```

## 프로젝트 구조

```
📦src
 ┣ 📂components
 ┃ ┗ 📂graph
 ┃ ┃ ┣ 📜GraphButtons.tsx
 ┃ ┃ ┣ 📜GraphDraw.tsx
 ┃ ┃ ┣ 📜GraphMain.tsx
 ┃ ┃ ┗ 📜GraphTooltip.tsx
 ┣ 📂hook
 ┃ ┗ 📜useCursorXY.ts
 ┣ 📂mock
 ┃ ┗ 📜mock_data.json
 ┣ 📂pages
 ┃ ┗ 📜GraphPage.tsx
 ┣ 📂types
 ┃ ┗ 📜index.d.ts
 ┣ 📜index.css
 ┗ 📜index.tsx
```

- `src`
  - `components` : 각 페이지에서 호출되는 세부 컴포넌트 폴더입니다.
    - `graph` : GraphPage에서 사용되는 컴포넌트 폴더입니다.
      - `GraphButton.tsx` : 각 지역 id를 선택하는 버튼 컴포넌트.
      - `GraphDraw.tsx` : d3 svg를 이용해 그래프를 그리는 컴포넌트.
      - `GraphMain.tsx` : 데이터를 불러오고 다른 Graph 컴포넌트를 호출하는 컴포넌트.
      - `GraphTooltip.tsx` : 마우스 호버링 시 툴팁 표시를 해주는 컴포넌트.
  - `mock` : 개발용 mock 데이터를 정리하는 폴더입니다.
  - `hook` : 리액트 커스텀 훅 폴더입니다.
    - `useCursorXY.tsx` : 툴팁 표시를 위해 마우스의 x,y 좌표를 추적, 반환하는 커스텀 훅입니다.
  - `pages` : 페이지 컴포넌트를 정리하는 폴더입니다.
    - `GraphPage.tsx` : 그래프 페이지 컴포넌트.
  - `type` : 전역으로 사용되는 typescript 타입 폴더입니다.
  - `index.css` : tailwind css 적용을 위한 css 파일입니다.
  - `index.tsx` : react 앱의 진입점입니다.

## 사용 스택

- react
- typescript
- d3.js
- tailwind css
- eslint
- prettier

## 커밋 규칙

| Commit Type | Format                                                                   |
| ----------- | ------------------------------------------------------------------------ | -------------- |
| feat        | 새로운 기능 추가                                                         |
| fix         | 버그 수정                                                                |
| docs        | 문서수정                                                                 |
| style       | 코드 스타일 변경(코드 포매팅,세미콜론 누락 등)</br>기능 수정이 없는 경우 |
| design      | 사용자 UI 디자인 변경(CSS 등)                                            |
| test        | 테스트 코드, 리팩토링 테스트 코드 추가                                   |
| refactor    | 코드 리팩토링                                                            |
| build       | 빌드 파일 수정                                                           |
| perf        | 성능 개선                                                                |
| chore       | 빌드 업무 수정, 패키지 매니저 수정(gitignore수정 등)                     |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                                        |
| remove      | 파일을 삭제만 한 경우                                                    | # New Document |
