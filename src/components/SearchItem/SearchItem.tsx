import React, { FC, memo } from 'react';
import { SearchItemContainer } from './SearchItem.styled';

type TSearchItem = {
    link: string
    title: string
    description: string
}

export const SearchItem: FC<TSearchItem> = memo(({ link, title, description }) => (
  <SearchItemContainer>
    <div>{ link }</div>
    <a href={link}>{ title }</a>
    <p>{ description }</p>
  </SearchItemContainer>
));
