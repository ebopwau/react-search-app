import styled, { css } from 'styled-components';

type TSearchBarContainer = {
  isAutocomplete: boolean;
}

export const SearchBarContainer = styled.div<TSearchBarContainer>`
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    & img {
      position: absolute;
      top: 17px;
      left: 17px;
      z-index: 1;
    }

    & input {
      font-family: 'Arial', sans-serif;    
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      width: 100%;
      padding: 15px 15px 15px 50px;
      border: 1px solid #DFE1E5;
      border-radius: 24px;
      outline: none;
      transition: filter .2s ease;

    ${({ isAutocomplete }) => isAutocomplete && css({
    'border-radius': '24px 24px 0px 0px',
    'border-bottom': 'none',
  })}

      &:hover {
        filter: ${({ isAutocomplete }) => (!isAutocomplete ? 'drop-shadow(0px 1px 6px rgba(32, 33, 36, 0.28))' : null)};
    }
  }
`;
