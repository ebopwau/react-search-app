import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Logo, SearchBar, SearchItem } from 'components';
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
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </SearchItemWrapper>
    </SearchPageContainer>
  );
};
