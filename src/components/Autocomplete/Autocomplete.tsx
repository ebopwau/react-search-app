import React, { FC, memo } from 'react';
import { AutocompleteContainer } from './Autocomplete.styled';
import { TAutocomplete } from './types';
import { AutocompleteItem } from './AutocompleteItem';

export const Autocomplete: FC<TAutocomplete> = memo(({
  items, onItemClick, onItemRemove,
}) => (
  <AutocompleteContainer>
    {
      items.map(({ text, type, id }) => (
        <AutocompleteItem
          key={id}
          id={id}
          text={text}
          type={type}
          onClick={onItemClick}
          onRemove={onItemRemove}
        />
      ))
    }
  </AutocompleteContainer>
));
