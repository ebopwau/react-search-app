import React, {
  ChangeEventHandler, useCallback, useState, FC, useRef, FocusEventHandler,
} from 'react';

import { useClickOutside } from 'utils';
import { SearchIcon } from 'assets';
import { Autocomplete } from 'components';
import { AutocompleteItemType } from 'components/Autocomplete/types';
import { SearchBarContainer } from './SearchBar.styled';

const items = [
  {
    text: 'asfkbsdv',
    type: AutocompleteItemType.history,
  },
  {
    text: 'lokohnhm',
    type: AutocompleteItemType.history,
  },
  {
    text: 'werwerwer',
    type: AutocompleteItemType.search,
  },
];

export const SearchBar: FC = () => {
  const [showAutocomplete, toggleAutocomplete] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const searchBarRef = useRef<HTMLDivElement>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target }) => {
    const { value } = target || {};

    setInputValue(value);
  }, []);

  useClickOutside(searchBarRef, () => { toggleAutocomplete(false); });

  const onFocus: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    toggleAutocomplete(true);
  }, []);

  return (
    <SearchBarContainer ref={searchBarRef} isAutocomplete={showAutocomplete}>
      <img src={SearchIcon} alt="/" />
      <input
        value={inputValue}
        onChange={onChange}
        onFocus={onFocus}
        type="text"
        autoComplete="off"
      />
      {
        showAutocomplete ? <Autocomplete items={items} /> : null
      }
    </SearchBarContainer>
  );
};
