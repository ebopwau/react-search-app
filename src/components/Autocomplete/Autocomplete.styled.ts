import styled from 'styled-components';

export const AutocompleteContainer = styled.div`
    font-family: 'Arial', sans-serif;    
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    position: absolute;
    top: 46px;
    left: 0px;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 20px;
    border: 1px solid #DFE1E5;
    border-top: none;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 20px;
      width: 93%;
      height: 1px;
      background-color: #E8EAED;
    }
`;

type TAutocompleteItemContainer = {
    history: boolean
}

export const AutocompleteItemContainer = styled.div<TAutocompleteItemContainer>`
    cursor: pointer;
    position: relative;
    padding: 8px 18px 8px 50px;
    display: flex;
    justify-content: space-between;

    & span {
      color: ${({ history }) => (history ? '#52188C' : 'inherit')};
    }

    & button {
      cursor: pointer;
      background-color: transparent;
      color: #70757A;
      outline: none;
      border: none;
    }

    &:hover {
      background-color: #EEEEEE;
    }

    & img {
      position: absolute;
      top: 8px;
      left: 17px;
    }
`;
