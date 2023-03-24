import styled from 'styled-components';

import { SearchBarContainer } from 'components/SearchBar/SearchBar.styled';
import { LogoContainer } from 'components/Logo/LogoContainer.styled';

export const SearchPageContainer = styled.div`
    padding: 0;
`;

export const SearchBarSection = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    border-bottom: 1px solid #EBEBEB;

    ${SearchBarContainer} {
      margin: 0;
    }

    ${LogoContainer} {
      margin: 0px 30px 0px 50px;

      @media (max-width: 600px) {
        display: none;
      }
    }
`;

export const SearchItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 270px;

  @media (max-width: 912px) {
      padding: 0px 25px 0px 25px;
    }
`;

export const ResultsAmount = styled.div`
  font-family: Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin: 10px 0px 20px 0px;
  color: #70757A;
`;
