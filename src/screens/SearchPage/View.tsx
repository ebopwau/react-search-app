import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  Logo, SearchBar, SearchItem, Pagination, NoResults,
} from 'components';
import mockSearchResults from 'mockSearchResults.json';
import {
  SearchPageContainer, SearchBarSection, SearchItemWrapper, ResultsAmount,
} from './SearchPage.styled';

export const View: FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('request');

  // Let's create some mock condition when there is no results
  const noResults = !query || query.length < 5;

  return (
    <SearchPageContainer>
      <SearchBarSection>
        <Logo fontSize={30} />
        <SearchBar initialValue={query || undefined} />
      </SearchBarSection>

      <SearchItemWrapper>
        {
          noResults ? (<NoResults resultText={query || ''} />) : (
            <>
              <ResultsAmount>
                About
                {' '}
                {mockSearchResults.length}
                {' '}
                results (0.0001 seconds)
              </ResultsAmount>
              <Pagination itemsPerPage={10} initPage={1}>
                {mockSearchResults.map(({
                  id, thumbnail, title, description,
                }) => (
                  <SearchItem
                    key={id}
                    link={thumbnail}
                    title={title}
                    description={description}
                  />
                ))}
              </Pagination>
            </>
          )
        }
      </SearchItemWrapper>
    </SearchPageContainer>
  );
};
