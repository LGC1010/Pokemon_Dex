# React Poketmon
![image](https://github.com/user-attachments/assets/64f75893-4a3b-4c70-bb0f-b6704e0fb3b3)
리액트 + 포켓몬 도감 사이트

# 1. 프로젝트 소개
- 자기 자신만의 포켓몬을 선택해서 도감에 추가하기
- 포켓몬의 디테일한 정보를 확인하기

# 2. 개발 기간
- 24.08.22 ~ 24.08.27

# 3. 개발 환경
- React.js
- HTML, CSS, JS
- 버전관리 GIT HUB

# 4. 프로젝트 구조
    📦src
     ┣ 📂assets
     ┃ ┣ 📜pokeball.png
     ┃ ┣ 📜pokemon-logo.png
     ┃ ┗ 📜react.svg
     ┣ 📂component
     ┃ ┣ 📜DashBoard.jsx
     ┃ ┣ 📜Detail.jsx
     ┃ ┣ 📜PoketmonCard.jsx
     ┃ ┗ 📜PoketmonList.jsx
     ┣ 📂context
     ┃ ┗ 📜PoketmonContext.js
     ┣ 📂pages
     ┃ ┣ 📜Dex.jsx
     ┃ ┗ 📜Home.jsx
     ┣ 📂shared
     ┃ ┗ 📜Router.jsx
     ┣ 📜App.css
     ┣ 📜App.jsx
     ┣ 📜index.css
     ┣ 📜main.jsx
     ┗ 📜mock.js

# 5. 페이지별 기능

![image](https://github.com/user-attachments/assets/39980021-e1a7-44c4-9692-53553267fa75)

## 메인 페이지
- 메인화면 포켓몬 리스트로 넘어가기

![image](https://github.com/user-attachments/assets/8c8b9ab4-a075-4cac-98e3-70cee35220dd)
## 포켓몬 리스트 페이지
- 도감 페이지에서 포켓몬 추가하기 및 삭제 디테일 페이지로 넘어가기

![image](https://github.com/user-attachments/assets/64b0405d-2190-4a6c-9f8f-c13ae60c347a)

## 디테일 페이지
- 선택한 포켓몬 정보 확인 및 돌아가기

# 프로젝트 후기

React를 처음 시작할때만 해도 이런 작업을 어떻게 할까 걱정부터 들었지만 점차 작업을 하면서 손에 익어갔고 작업을 할때마다
props drilling으로만 프로젝트 작업을 했는데 이번에는 더 관리하기 편하게 Context API를 사용하여 좀 더 쉽게 props를 전달 할 수 있었고
Route를 사용해 페이지간 이동이 더 편하게 작업 할 수 있었다. 다양한 기술들을 배우고 사용한다는거에 만족함을 느낀 작업이였던거 같다
