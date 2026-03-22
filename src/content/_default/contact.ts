import type { ContactData } from '../../types/content.types';

export const contact: ContactData = {
  title: "Let's Connect",
  subtitle: "Have a project in mind? Let's talk!",

  info: {
    email: 'hello@example.com',
    phone: '+82 10-1234-5678',
    location: 'Seoul, South Korea',
    availability: 'Available for freelance',
  },

  form: {
    enabled: true,
    endpoint: 'https://formspree.io/f/xxxxx',
    fields: ['name', 'email', 'subject', 'message'],
    submitText: 'Send Message',
    successMessage: "Thanks! I'll get back to you soon.",
  },

  showSocial: true,

  calendar: {
    enabled: true,
    text: 'Schedule a Call',
    href: 'https://calendly.com/username',
  },
};
