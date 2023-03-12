import React, { FC, memo, MouseEventHandler } from 'react';
import { ClockIcon, SearchIcon } from 'assets';
import { TAutocompleteItem, AutocompleteItemType } from './types';
import { AutocompleteItemContainer } from './Autocomplete.styled';

export const AutocompleteItem: FC<TAutocompleteItem> = memo(({
  text, type, id, onClick, onRemove,
}) => {
  const onItemRemove: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onRemove({ text, type, id });
  };

  return (
    <AutocompleteItemContainer onClick={() => onClick({ text, type, id })} history={type === AutocompleteItemType.history}>
      <img src={type === AutocompleteItemType.history ? ClockIcon : SearchIcon} alt="/" />
      <span>
        { text }
      </span>

      {
      type === AutocompleteItemType.history ? (
        <button type="button" onClick={onItemRemove}>Remove</button>
      ) : null
    }
    </AutocompleteItemContainer>
  );
});
