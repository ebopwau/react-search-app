import React, { FC } from 'react';
import { LogoContainer } from './LogoContainer.styled';

type TLogo = {
    fontSize?: number;
}

export const Logo: FC<TLogo> = ({ fontSize = 30 }) => (
  <LogoContainer fontSize={fontSize}>
    <span style={{ color: '#4285F4' }}>S</span>
    <span style={{ color: '#EA4335' }}>e</span>
    <span style={{ color: '#FBBC05' }}>a</span>
    <span style={{ color: '#FBBC05' }}>r</span>
    <span style={{ color: '#4285F4' }}>c</span>
    <span style={{ color: '#34A853' }}>h</span>
    <span style={{ color: '#EA4335' }}>X</span>
  </LogoContainer>
);

Logo.defaultProps = {
  fontSize: 30,
};
