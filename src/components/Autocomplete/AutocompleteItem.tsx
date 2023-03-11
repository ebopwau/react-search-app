import React, { FC, memo } from 'react';
import { ClockIcon, SearchIcon } from 'assets';
import { TAutocompleteItem, AutocompleteItemType } from './types';
import { AutocompleteItemContainer } from './Autocomplete.styled';

export const AutocompleteItem: FC<TAutocompleteItem> = memo(({ text, type }) => (
  <AutocompleteItemContainer>
    <img src={type === AutocompleteItemType.history ? ClockIcon : SearchIcon} alt="/" />
    <span>
      { text }
    </span>
  </AutocompleteItemContainer>
));
