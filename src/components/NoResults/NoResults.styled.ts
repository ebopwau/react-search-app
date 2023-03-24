import styled from 'styled-components';

export const NoResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #202124;

    & p {
        margin: 10px 0px;

        &:first-of-type {
            margin-top: 35px;
        }
    }

    & ul {
        margin: 0px 0px 30px 50px;

      @media (max-width: 430px) {
        margin: 0px 0px 30px 20px;
      }
    }

    & img {
        max-width: 600px;
    }
`;
