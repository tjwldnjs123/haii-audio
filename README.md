# Haii-audio 7team

### **[배포링크](https://tjwldnjs123.github.io/haii-audio)**

## JUSTCODE 6기 기업협업 2주차 1번째 과제-Haii-audio- 7팀

<br />

## 1. 개발 기간 🗓

- **개발 기간** : 2022.10.11 ~ 2022.10.13(3일)
  <br />
  <br />

## 2. 팀원 및 협업 방식 

**팀원**

- 김충만
- 이기완
- 서지원

**협업 방식**

- **[팀 노션](https://www.notion.so/wecode/7-Lucky-7-5667c517070a4b5bbdbd1a7fff2128c2)**
  <br />
  <br />

## 3. 프로그램 실행 방법 및 파일 프로젝트 구조 🚧

### 프로그램 실행 방법

<br />

1.  터미널을 키고 원하는 폴더 경로로 이동해 레포지토리를 클론 받습니다.

```
git clone https://github.com/tjwldnjs123/haii-audio.git
```

<br />

2.  클론이 다 받아지고 나면 패키지를 다운 받습니다.

```
npm i
```

<br />

3.  프로젝트를 실행합니다.

```
npm start
```

<br />

4. 브라우저가 켜지고 프로젝트를 확인 할 수 있습니다.
   <br />
   <br />

### 파일 프로젝트 구조


- `src/pages/nav`: 네비게이션 페이지 파일 폴더
- `src/pages/record`: record 페이지 파일 폴더
- `src/play`: 재생 관리 폴더

   <br />
   <br />

## 4. 적용 기술 및 구현 기능 🛠

<br />

### 4-1. 적용 기술

- JavaScript
- React.js
- react-router-dom
- styled-components
- react-icons
- wavesurfer-react
- gh-pages (배포라이브러리)

<br />

### 4-2. 구현 기능

- ✅ nav 페이지 _(/ )_

![Nav](https://user-images.githubusercontent.com/103557910/195767050-f3dff46c-a074-476c-ae5a-5aeb55ffd49c.gif)

  - 서지원
    - UI
      - session storage에 저장된 'file'이름 가져오기
      - 녹음버튼 클릭 시 녹음 페이지로 이동

  <br />

- ✅ record 페이지 _(/record)_

![Record](https://user-images.githubusercontent.com/103557910/195766977-2c325d9f-0416-48e5-9815-6425bdc23b7b.gif)

  - 김충만
    - 녹음
      - 레이아웃
      - 녹음 중 일 때 UI 표시
      - 시간 초 단위로 타이머 설정
      - 녹음이 되고 있는 시간 표기
  <br />

  - 서지원
    - 녹음
      - 녹음 구현 (url session storage에 저장)
    

  <br />

- ✅ play 페이지 _(/play)_

![Play](https://user-images.githubusercontent.com/103557910/195767017-84a01fc8-2c92-4c3b-a4ce-836c005d7e3d.gif)

  - 이기완
    - wavesurfer 라이브러리 이용하여 파형 구현
    - Audio 태그와 wavesurfer 결합하여 재생화면 구현
  
