import styled from 'styled-components';

type TLogoContainer = {
    fontSize: number;
}

export const LogoContainer = styled.div<TLogoContainer>`
    display: flex;
    justify-content: center;
    margin: 0 auto;

    & span {
      font-family: 'Josefin Sans', sans-serif;    
      font-weight: 500;
      font-size: ${({ fontSize }) => `${fontSize}px`};
    }
`;
