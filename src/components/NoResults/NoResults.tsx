import React, { FC } from 'react';

import { noResultsImage } from 'assets';
import { NoResultsContainer } from './NoResults.styled';

type TNoResults = {
  resultText: string
}

export const NoResults: FC<TNoResults> = ({ resultText }) => (
  <NoResultsContainer>
    <p>
      No results containing all your search terms were found.
    </p>
    <p>
      Your search -
      <b>
        {' '}
        { resultText }
        {' '}
      </b>
      - did not match any documents.
    </p>
    <p>
      Suggestions:
    </p>
    <ul>
      <li>Make sure that all words are spelled correctly.</li>
      <li>Try different keywords.</li>
      <li>Try more general keywords.</li>
    </ul>
    <img src={noResultsImage} alt="/" />
  </NoResultsContainer>
);
