import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiSend, FiCalendar } from 'react-icons/fi';
import { contact } from '../../../content';
import { Container, Heading2, Button } from '../../common';
import { useScrollReveal } from '../../../hooks';
import * as S from './styles';

export const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.form?.endpoint) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(contact.form.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.ContactSection id="contact" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <S.Header>
            <Heading2 gradient align="center">
              {contact.title}
            </Heading2>
            {contact.subtitle && <S.Subtitle>{contact.subtitle}</S.Subtitle>}
          </S.Header>
        </motion.div>

        <S.Content>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <S.InfoSection>
              <S.InfoTitle>Contact Information</S.InfoTitle>

              <S.InfoList>
                {contact.info.email && (
                  <S.InfoItem>
                    <S.InfoIcon>
                      <FiMail size={20} />
                    </S.InfoIcon>
                    <S.InfoContent>
                      <S.InfoLabel>Email</S.InfoLabel>
                      <S.InfoValue as="a" href={`mailto:${contact.info.email}`}>
                        {contact.info.email}
                      </S.InfoValue>
                    </S.InfoContent>
                  </S.InfoItem>
                )}

                {contact.info.phone && (
                  <S.InfoItem>
                    <S.InfoIcon>
                      <FiPhone size={20} />
                    </S.InfoIcon>
                    <S.InfoContent>
                      <S.InfoLabel>Phone</S.InfoLabel>
                      <S.InfoValue as="a" href={`tel:${contact.info.phone}`}>
                        {contact.info.phone}
                      </S.InfoValue>
                    </S.InfoContent>
                  </S.InfoItem>
                )}

                {contact.info.location && (
                  <S.InfoItem>
                    <S.InfoIcon>
                      <FiMapPin size={20} />
                    </S.InfoIcon>
                    <S.InfoContent>
                      <S.InfoLabel>Location</S.InfoLabel>
                      <S.InfoValue>{contact.info.location}</S.InfoValue>
                    </S.InfoContent>
                  </S.InfoItem>
                )}

                {contact.info.instagram && (
                  <S.InfoItem>
                    <S.InfoIcon>
                      <FiInstagram size={20} />
                    </S.InfoIcon>
                    <S.InfoContent>
                      <S.InfoLabel>Instagram</S.InfoLabel>
                      <S.InfoValue
                        as="a"
                        href={`https://instagram.com/${contact.info.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.info.instagram}
                      </S.InfoValue>
                    </S.InfoContent>
                  </S.InfoItem>
                )}
              </S.InfoList>

              {contact.info.availability && (
                <S.Availability>{contact.info.availability}</S.Availability>
              )}

              {contact.calendar?.enabled && (
                <Button
                  as="a"
                  href={contact.calendar.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  fullWidth
                >
                  <FiCalendar />
                  {contact.calendar.text}
                </Button>
              )}
            </S.InfoSection>
          </motion.div>

          {contact.form?.enabled && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <S.FormSection>
                {isSubmitted ? (
                  <S.SuccessMessage>
                    <S.SuccessIcon>
                      <FiSend size={40} />
                    </S.SuccessIcon>
                    <S.SuccessText>{contact.form.successMessage}</S.SuccessText>
                  </S.SuccessMessage>
                ) : (
                  <S.Form onSubmit={handleSubmit}>
                    <S.FormRow>
                      <S.FormGroup>
                        <S.Label htmlFor="name">Name</S.Label>
                        <S.Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </S.FormGroup>
                      <S.FormGroup>
                        <S.Label htmlFor="email">Email</S.Label>
                        <S.Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </S.FormGroup>
                    </S.FormRow>

                    <S.FormGroup>
                      <S.Label htmlFor="subject">Subject</S.Label>
                      <S.Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </S.FormGroup>

                    <S.FormGroup>
                      <S.Label htmlFor="message">Message</S.Label>
                      <S.Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </S.FormGroup>

                    <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
                      <FiSend />
                      {isSubmitting ? 'Sending...' : contact.form.submitText}
                    </Button>
                  </S.Form>
                )}
              </S.FormSection>
            </motion.div>
          )}
        </S.Content>
      </Container>
    </S.ContactSection>
  );
};
