import type { ProjectsData, Project, ProjectCategory, ProjectSkill } from '../../types/content.types';

export const projectCategories: readonly ProjectCategory[] = [
  { id: 'exhibition', label: 'Exhibition', icon: 'gallery' },
  { id: 'lecture', label: 'Lecture', icon: 'presentation' },
  { id: 'solution', label: 'Solution', icon: 'code' },
];

export const projectSkills: readonly ProjectSkill[] = [
  { id: 'unity', label: 'Unity', icon: 'unity' },
  { id: 'web', label: 'Web', icon: 'web' },
  { id: 'arduino', label: 'Arduino', icon: 'arduino' },
  { id: 'ai', label: 'AI', icon: 'brain' },
  { id: 'kinetic', label: 'Kinetic', icon: 'kinetic' },
  { id: 'sensor', label: 'Sensor', icon: 'sensor' },
];

export const projects: Project[] = [
  {
    id: 'ossia-organ',
    title: 'Ossia Organ',
    categories: ['exhibition'],
    skills: ['arduino', 'kinetic', 'sensor'],
    thumbnail: '/assets/images/no_img.png',
    shortDescription: 'Arduino ESP32 기반 분산형 인터랙티브 장치 시스템',
    fullDescription: `박예나 작가와 협업한 북서울미술관 전시 프로젝트입니다.

**주요 기술:**
- Arduino ESP32 기반 분산형 인터랙티브 장치 시스템 설계
- 전시 공간 내 다수의 장치(조명, 모터, 팬, 연무기, 히터 등)를 네트워크 기반으로 중앙 제어
- 24시간 장기 전시를 고려한 안정성 중심 구조 설계
- MOSFET(IRLZ44N) 기반 PWM 제어 회로 설계 (12V LED 스트립 최대 25m 밝기 제어)
- 20m 길이 구리 테이프 터치 인터랙션 시스템 개발
- ESP32 터치 센서 + 커스텀 알고리즘 결합 (환경 노이즈 대응, baseline 자동 캘리브레이션)
- 감소율 기반 다중 접촉 추정 (1명 / 2명 / 3명 이상)`,
    technologies: ['Arduino', 'ESP32', 'PWM', 'Touch Sensor', 'MOSFET'],
    links: {},
    date: '2025-01',
    status: 'completed',
    extra: {
      venue: '북서울미술관',
      artist: '박예나',
    },
  },
  {
    id: 'quintuple-odyssey',
    title: 'Quintuple Odyssey',
    categories: ['exhibition'],
    skills: ['unity', 'ai', 'sensor'],
    thumbnail: '/assets/images/no_img.png',
    shortDescription: 'Unity 기반 전시장 인터랙티브 시스템 + RAG 파이프라인',
    fullDescription: `조민선 작가와 협업한 아트센터예술의시간 전시 프로젝트입니다.

**주요 기술:**
- 유니티 기반 전시장 인터랙티브 시스템 개발 (관객 행동 → 비주얼/사운드 변화)
- RealSense로 관객-작품 거리 측정 및 상태 관리
- Hokuyo LiDAR 실시간 수신, 관객 이동경로 추적
- 자동 녹화 기능(AVPro) 구현
- Vector Store 기반 RAG 파이프라인 구축
- 전시용 세계관 문서와 음악 설계/규칙 문서를 임베딩하여 Vector Store에 저장
- GPT 요청 시 센서 요약과 함께 관련 문단을 검색하여 프롬프트에 합성`,
    technologies: ['Unity', 'RealSense', 'LiDAR', 'GPT', 'RAG', 'Vector Store'],
    links: {},
    date: '2025-01',
    status: 'completed',
    extra: {
      venue: '아트센터예술의시간',
      artist: '조민선',
    },
  },
  {
    id: 'co-audience',
    title: 'Co-Audience',
    categories: ['exhibition'],
    skills: ['unity', 'ai', 'web'],
    thumbnail: '/assets/images/no_img.png',
    shortDescription: 'YOLO 기반 실시간 CCTV 객체 인식 시스템',
    fullDescription: `당산생각의벙커 전시에 참여작가로 참여한 프로젝트입니다.

**주요 기술:**
- YOLO 기반 실시간 CCTV 객체 인식·트래킹 시스템 구현
- Unity + Firebase Realtime Database 기반 멀티 존 사운드 제어 시스템 설계
- Firebase RTDB 기반 실시간 상태 동기화 구조 구현
- 각 Zone별 다중 음원(AudioClip) 관리
- 전시정보 페이지 웹페이지 구현
- CCTV, 스피커, 컴퓨터 현장설치`,
    technologies: ['YOLO', 'Unity', 'Firebase', 'Python', 'Web'],
    links: {},
    date: '2025-01',
    status: 'completed',
    extra: {
      venue: '당산생각의벙커',
      role: '참여작가',
    },
  },
  {
    id: 'warm-window',
    title: 'Warm Window',
    categories: ['exhibition'],
    skills: ['arduino', 'web'],
    thumbnail: '/assets/images/no_img.png',
    shortDescription: 'Firebase 기반 실시간 조명 제어 시스템',
    fullDescription: `갤러리잔느 전시에 참여작가로 참여한 프로젝트입니다.

**주요 기술:**
- Firebase Realtime Database 기반 실시간 조명 제어 시스템 구현
- ESP32 + WiFi 기반 물리 디바이스 제어 모듈 개발
- REST Streaming(SSE) 방식 실시간 리스너 구조 구현
- 다채널 릴레이 모듈을 활용한 공간별 조명 제어
- 단일 DB 상태로 복수 릴레이 동시 제어 로직 설계
- 전시 환경을 고려한 네트워크 재연결 및 상태 동기화 처리
- ESP32, 릴레이, 조명 장치 현장 설치 및 세팅
- 전시서문 및 설문 웹페이지 구현`,
    technologies: ['ESP32', 'Firebase', 'WiFi', 'Relay', 'Web'],
    links: {},
    date: '2025-01',
    status: 'completed',
    extra: {
      venue: '갤러리잔느',
      role: '참여작가',
    },
  },
  {
    id: '입춘',
    title: '입춘',
    categories: ['exhibition'],
    skills: ['arduino', 'web', 'unity'],
    thumbnail: '/assets/images/kiro/입춘.png',
    media: [{ type: 'video', url: '/assets/images/kiro/입춘_영상_1.mp4' }],
    shortDescription: 'Firebase 기반 실시간 조명 제어 시스템',
    fullDescription: `갤러리잔느 전시에 참여작가로 참여한 프로젝트입니다.

**주요 기술:**
- Firebase Realtime Database 기반 실시간 조명 제어 시스템 구현
- ESP32 + WiFi 기반 물리 디바이스 제어 모듈 개발
- REST Streaming(SSE) 방식 실시간 리스너 구조 구현
- 다채널 릴레이 모듈을 활용한 공간별 조명 제어
- 단일 DB 상태로 복수 릴레이 동시 제어 로직 설계
- 전시 환경을 고려한 네트워크 재연결 및 상태 동기화 처리
- ESP32, 릴레이, 조명 장치 현장 설치 및 세팅
- 전시서문 및 설문 웹페이지 구현`,
    technologies: ['ESP32', 'Firebase', 'WiFi', 'Relay', 'Web'],
    links: {},
    date: '2025-01',
    status: 'completed',
    extra: {
      venue: '갤러리잔느',
      role: '참여작가',
    },
  },
  {
    id: 'omniscient-reader',
    title: '전지적독자시점: 구원의 마왕전',
    categories: ['solution'],
    skills: ['web'],
    thumbnail: '/assets/images/no_img.png',
    shortDescription: '잠실롯데월드 웹콘텐츠 개발',
    fullDescription: `잠실롯데월드에서 진행된 전지적독자시점 IP 기반 전시의 웹콘텐츠 개발 프로젝트입니다.

**주요 기술:**
- 실시간 리스너로 실시간 메시지/상태 업데이트 구현
- users_YYYYMMDD_HH 컬렉션 구조로 데이터 분산 및 쿼리 효율 개선
- SHA-256 해시로 URL 파라미터 암호화 + 시간 제한 검증 로직 구현
- 시간 기반 세션 관리 및 2시간 제한 접근 제어 시스템 구축 (LocalStorage로 상태 유지)
- Firebase Analytics로 사용자 행동 추적 및 퍼널 분석 구축`,
    technologies: ['Firebase', 'Web', 'Analytics', 'SHA-256'],
    links: {},
    date: '2025-01',
    status: 'completed',
    extra: {
      venue: '잠실롯데월드',
    },
  },
  {
    id: 'paris-olympics',
    title: '파리 올림픽 코리아 하우스',
    categories: ['solution'],
    skills: ['unity', 'sensor'],
    thumbnail: '/assets/images/no_img.png',
    shortDescription: '포토부스 + Unity 인터랙션 콘텐츠',
    fullDescription: `2024 파리 올림픽 코리아 하우스에서 운영된 포토부스 인터랙션 콘텐츠 개발 프로젝트입니다.

**주요 기술:**
- 포토부스 + Unity를 활용한 인터랙션 콘텐츠 개발
- RealSense 기반 사용자 충돌 판정 로직
- 인터랙션 오브젝트/연출 제어
- 카메라 스트림 영상 녹화 및 타임랩스 생성 파이프라인
- 4컷 촬영 → 프레임 합성 → 저장 → 프린터 출력까지 운영 가능한 플로우 구성`,
    technologies: ['Unity', 'RealSense', 'Camera', 'Photo Booth'],
    links: {},
    date: '2024-07',
    status: 'completed',
    extra: {
      venue: '파리 올림픽 코리아 하우스',
    },
  },
  {
    id: 'ai-class-haso',
    title: '산책학교 생성형 AI 찍먹클래스',
    categories: ['lecture'],
    skills: ['ai', 'arduino'],
    thumbnail: '/assets/images/no_img.png',
    shortDescription: '생성형 AI와 하드웨어를 활용한 교육 프로그램',
    fullDescription: `하소문화센터에서 진행한 생성형 AI 활용 교육 프로그램입니다.

**강의 내용:**
- 생성형 AI를 활용한 이미지 및 음악 콘텐츠 생성 체험
- 도트매트릭스(8x16) 기반 감정 표현 기획 및 이진 배열 설계
- 배열 기반 다중 표정 저장 및 millis() 기반 자동 순환 로직 구현
- AI, 코딩, 납땜, 전시까지 비전문가도 코딩/전자제어 경험을 쉽게 접할 수 있는 학습 구조 설계`,
    technologies: ['AI', 'Arduino', 'LED Matrix', 'Soldering'],
    links: {},
    date: '2025-01',
    status: 'completed',
    extra: {
      venue: '하소문화센터',
    },
  },
  {
    id: 'jecheon-class',
    title: '내 인생의 점, 선, 면',
    categories: ['lecture'],
    skills: ['ai', 'web'],
    thumbnail: '/assets/images/no_img.png',
    shortDescription: '생성형 AI와 바이브코딩 교육',
    fullDescription: `제천영상미디어센터에서 진행한 AI 활용 및 개발 환경 구축 교육입니다.

**강의 내용:**
- 이미지 생성형 AI로 이미지 제작 및 프롬프트 개선 교육
- Cursor AI로 바이브코딩 실습(지시→코드 수정) 및 프롬프트 작성법 교육
- GitHub·GitHub Desktop·Node.js·npm 설치로 개발환경 구축
- Firebase Hosting으로 배포 및 가비아 도메인 연결(DNS) 실습`,
    technologies: ['AI', 'Cursor', 'GitHub', 'Firebase', 'Web'],
    links: {},
    date: '2025-01',
    status: 'completed',
    extra: {
      venue: '제천영상미디어센터',
    },
  },
];

export const projectsData: ProjectsData = {
  title: 'Projects',
  subtitle: '전시, 설치 미술, 강의 프로젝트 모음',
  categories: projectCategories,
  skillFilters: projectSkills,
  items: projects,

  display: {
    showFilter: true,
    itemsPerPage: 9,
    layout: 'grid',
  },
};
