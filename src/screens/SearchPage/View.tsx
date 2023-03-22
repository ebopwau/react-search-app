import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  Logo, SearchBar, SearchItem, Pagination,
} from 'components';
import mockSearchResults from 'mockSearchResults.json';
import { SearchPageContainer, SearchBarSection, SearchItemWrapper } from './SearchPage.styled';

export const View: FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('request');

  return (
    <SearchPageContainer>
      <SearchBarSection>
        <Logo fontSize={30} />
        <SearchBar initialValue={query || undefined} />
      </SearchBarSection>

      <SearchItemWrapper>
        <Pagination itemsPerPage={10} initPage={1}>
          {
            mockSearchResults.map(({
              id, thumbnail, title, description,
            }) => (
              <SearchItem
                key={id}
                link={thumbnail}
                title={title}
                description={description}
              />
            ))
          }
        </Pagination>
      </SearchItemWrapper>
    </SearchPageContainer>
  );
};
