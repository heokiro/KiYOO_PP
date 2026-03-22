import type { CapabilitiesData } from '../../types/content.types';

export const about: CapabilitiesData = {
  heading: 'Designing & building experiences\nat the intersection of code and craft.',
  items: [
    {
      title: 'Game Engine Development',
      tools: [
        { name: 'Unity', icon: 'SiUnity' },
        { name: 'Unreal Engine', icon: 'SiUnrealengine' },
      ],
      descriptionEn:
        'Building immersive real-time experiences with industry-leading engines. From physics-based simulations to interactive art installations, delivering polished cross-platform results.',
      descriptionKo:
        '물리 기반 시뮬레이션부터 인터랙티브 설치 작품까지, 산업 표준 엔진으로 완성도 높은 실시간 경험을 구현합니다.',
    },
    {
      title: 'Hardware Development',
      tools: [
        { name: 'Arduino', icon: 'SiArduino' },
        { name: 'Raspberry Pi', icon: 'SiRaspberrypi' },
        { name: 'Intel RealSense', icon: 'FiCpu' },
        { name: 'LiDAR', icon: 'FiTarget' },
      ],
      descriptionEn:
        'Prototyping and deploying custom hardware solutions. Bridging the physical and digital with microcontrollers, single-board computers, and depth-sensing technology.',
      descriptionKo:
        '마이크로컨트롤러, 싱글보드 컴퓨터, 뎁스 센서를 활용해 물리와 디지털을 연결하는 커스텀 하드웨어를 설계하고 구현합니다.',
    },
    {
      title: '3D Modeling & Visual Programming',
      tools: [
        { name: 'TouchDesigner', icon: 'FiShare2' },
        { name: 'Notch', icon: 'FiZap' },
        { name: 'After Effects', icon: 'SiAdobeaftereffects' },
      ],
      descriptionEn:
        'Crafting striking 3D assets and real-time visual systems — from generative art pipelines to broadcast-ready motion graphics and node-based live visuals.',
      descriptionKo:
        '생성형 아트 파이프라인부터 방송용 모션 그래픽까지, 노드 기반 라이브 비주얼과 3D 에셋을 제작합니다.',
    },
    {
      title: 'Design Tools',
      tools: [
        { name: 'Blender', icon: 'SiBlender' },
        { name: 'Premiere Pro', icon: 'SiAdobepremierepro' },
        { name: 'Illustrator', icon: 'SiAdobeillustrator' },
      ],
      descriptionEn:
        'Precision design from concept to production. Parametric 3D modeling, raster editing, and vector illustration combined into a seamless creative workflow.',
      descriptionKo:
        '파라메트릭 3D 모델링, 래스터 편집, 벡터 일러스트레이션을 아우르는 완성된 디자인 워크플로우를 구축합니다.',
    },
  ],
};
