import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { profile } from '../../../content';
import { Container } from '../../common';
import * as S from './styles';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <S.HeaderWrapper $isScrolled={isScrolled}>
      <Container>
        <S.HeaderContent>
          <S.Logo href="#hero">
            {profile.name.split(' ')[0]}
            <span>.</span>
          </S.Logo>

          <S.DesktopNav>
            {navItems.map((item) => (
              <S.NavLink key={item.href} href={item.href}>
                {item.label}
              </S.NavLink>
            ))}
          </S.DesktopNav>

          <S.MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </S.MobileMenuButton>
        </S.HeaderContent>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <S.MobileMenu
            as={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <S.MobileNavLink href={item.href} onClick={handleNavClick}>
                  {item.label}
                </S.MobileNavLink>
              </motion.div>
            ))}
          </S.MobileMenu>
        )}
      </AnimatePresence>
    </S.HeaderWrapper>
  );
};
