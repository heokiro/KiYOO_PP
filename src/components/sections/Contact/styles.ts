import styled from 'styled-components';

export const ContactSection = styled.section`
  background: ${({ theme }) => theme.colors.surface};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${({ theme }) => theme.spacing[12]};

  ${({ theme }) => theme.media.down.lg} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;

export const InfoSection = styled.div`
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border-radius: ${({ theme }) => theme.borders.radius.lg};
  padding: ${({ theme }) => theme.spacing[8]};
`;

export const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  flex-shrink: 0;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const InfoLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
`;

export const InfoValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Availability = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => `${theme.colors.secondary}20`};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const FormSection = styled.div`
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border-radius: ${({ theme }) => theme.borders.radius.lg};
  padding: ${({ theme }) => theme.spacing[8]};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[4]};

  ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borders.radius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: inherit;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

export const Textarea = styled.textarea`
  padding: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borders.radius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[4]};
  min-height: 300px;
  text-align: center;
`;

export const SuccessIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: ${({ theme }) => theme.borders.radius.full};
`;

export const SuccessText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.primary};
`;
