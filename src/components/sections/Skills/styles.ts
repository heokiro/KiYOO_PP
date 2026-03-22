import styled from 'styled-components';

export const SkillsSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
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

export const SkillGroups = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[8]};

  ${({ theme }) => theme.media.down.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.down.md} {
    grid-template-columns: 1fr;
  }
`;

export const SkillGroup = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borders.radius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
`;

export const GroupTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const SkillItem = styled.div``;

export const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const SkillName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SkillLevel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
`;

export const SkillBar = styled.div`
  height: 8px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border-radius: ${({ theme }) => theme.borders.radius.full};
  overflow: hidden;
`;

interface SkillProgressProps {
  $level: number;
}

export const SkillProgress = styled.div<SkillProgressProps>`
  height: 100%;
  background: ${({ theme, $level }) => {
    if ($level >= 90) return theme.colors.secondary;
    if ($level >= 70) return theme.colors.primary;
    if ($level >= 50) return theme.colors.highlight;
    return theme.colors.accent;
  }};
  border-radius: ${({ theme }) => theme.borders.radius.full};
`;
