import React, {
  ChangeEventHandler, useCallback, useState, FC, useRef, FocusEventHandler,
} from 'react';

import mockData from 'mock.json';
import { useClickOutside, useComposedItems, useLocalStorage } from 'utils';
import { SearchIcon } from 'assets';
import { Autocomplete } from 'components';
import { AutocompleteItemType, TItemData } from 'components/Autocomplete/types';
import { SearchBarContainer } from './SearchBar.styled';

const mockDataNormalizer = (): TItemData[] => mockData.map(({ id, title }) => ({ text: title, id, type: AutocompleteItemType.search }));

export const SearchBar: FC = () => {
  const [itemsData] = useState<TItemData[]>(mockDataNormalizer);
  const [historyItems, setLocalStorageValue] = useLocalStorage<TItemData[]>('historyItems', []);

  const [showAutocomplete, toggleAutocomplete] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const searchBarRef = useRef<HTMLDivElement>(null);
  const composedItems = useComposedItems(inputValue, historyItems, itemsData);

  useClickOutside(searchBarRef, () => { toggleAutocomplete(false); });

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target }) => {
    const { value } = target || {};

    setInputValue(value);
  }, []);

  const onFocus: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    toggleAutocomplete(true);
  }, []);

  const onItemClick = useCallback((data: TItemData) => {
    const { text, id } = data;
    setInputValue(text);

    if (!historyItems.find(({ id: historyItemId }) => id === historyItemId)) {
      setLocalStorageValue([...historyItems, { ...data, type: AutocompleteItemType.history }]);
    }

    toggleAutocomplete(false);
  }, [historyItems, setLocalStorageValue]);

  const onItemRemove = useCallback(({ id }: TItemData) => {
    const deleteItemIdx = historyItems.findIndex(({ id: historyItemId }) => historyItemId === id);

    if (deleteItemIdx !== -1) {
      const array = JSON.parse(JSON.stringify(historyItems));
      array[deleteItemIdx] = null;

      setLocalStorageValue(array.filter(Boolean));
    }
  }, [historyItems, setLocalStorageValue]);

  return (
    <SearchBarContainer ref={searchBarRef} isAutocomplete={showAutocomplete && !!composedItems.length}>
      <img src={SearchIcon} alt="/" />
      <input
        value={inputValue}
        onChange={onChange}
        onFocus={onFocus}
        type="text"
        autoComplete="off"
      />
      {
        showAutocomplete && !!composedItems.length ? (
          <Autocomplete
            items={composedItems}
            onItemClick={onItemClick}
            onItemRemove={onItemRemove}
          />
        ) : null
      }
    </SearchBarContainer>
  );
};
