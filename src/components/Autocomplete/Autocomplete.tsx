import React, { FC } from 'react';
import { AutocompleteContainer } from './Autocomplete.styled';
import { TAutocomplete } from './types';
import { AutocompleteItem } from './AutocompleteItem';

export const Autocomplete: FC<TAutocomplete> = ({ items }) => (
  <AutocompleteContainer>
    {
      items.map(({ text, type }) => (
        <AutocompleteItem text={text} type={type} />
      ))
    }
  </AutocompleteContainer>
);
