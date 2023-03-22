import styled from 'styled-components';

type TPaginationPage = {
    isActive: boolean;
}

export const PagesContainer = styled.div`
    display: flex;
    margin: 10px 0px;
`;

export const Page = styled.div<TPaginationPage>`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${({ isActive }) => (isActive ? '#202124' : '#1A0DAB')};
    padding: 5px;
    cursor: pointer;
`;
