import type { ContactData } from '../../types/content.types';

export const contact: ContactData = {
  title: 'Contact',
  subtitle: '프로젝트 협업이나 문의사항이 있으시면 연락주세요',

  info: {
    email: 'heokiro@gmail.com',
    instagram: '@heokiro',
    availability: '프로젝트 협업 가능',
  },

  form: {
    enabled: true,
    endpoint: 'https://formspree.io/f/xxxxx',
    fields: ['name', 'email', 'subject', 'message'],
    submitText: '메시지 보내기',
    successMessage: '감사합니다! 빠른 시일 내에 답변드리겠습니다.',
  },

  showSocial: true,

  calendar: {
    enabled: false,
    text: '',
    href: '',
  },
};
