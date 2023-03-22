import styled from 'styled-components';

export const SearchItemContainer = styled.div`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    margin-bottom: 30px;
    max-width: 570px;

    & div {
      color: #202124;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 5px;
    }

    & a {
      color: #1A0DAB;
      font-size: 20px;
      line-height: 26px;
      cursor: pointer;  
      text-decoration: none;

      &:visited {
        color: #681da8;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    & p {
      color: #4D5156;
      font-size: 14px;
      line-height: 22px;
    }
`;
