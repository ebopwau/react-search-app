import React, {
  ChangeEventHandler, useCallback, useState, FC, useRef, FocusEventHandler, KeyboardEventHandler,
} from 'react';
import { nanoid } from 'nanoid';

import { useNavigate } from 'react-router-dom';

import mockData from 'mock.json';
import { useClickOutside, useComposedItems, useLocalStorage } from 'utils';
import { SearchIcon } from 'assets';
import { Autocomplete } from 'components';
import { AutocompleteItemType, TItemData } from 'components/Autocomplete/types';
import { SearchBarContainer } from './SearchBar.styled';

const mockDataNormalizer = (): TItemData[] => mockData.map(({ id, title }) => ({ text: title, id, type: AutocompleteItemType.search }));

type TSearchBar = {
  initialValue?: string;
}

export const SearchBar: FC<TSearchBar> = ({ initialValue = '' }) => {
  const [itemsData] = useState<TItemData[]>(mockDataNormalizer);
  const [historyItems, setLocalStorageValue] = useLocalStorage<TItemData[]>('historyItems', []);

  const [showAutocomplete, toggleAutocomplete] = useState(false);
  const [inputValue, setInputValue] = useState(() => initialValue);
  const navigate = useNavigate();

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

  const onKeyUp: KeyboardEventHandler<HTMLInputElement> = useCallback(({ key }) => {
    if (!inputValue || inputValue.length < 2) return;

    if (key === 'Enter') {
      const historyItem = historyItems.find(({ text: historyItemText }) => inputValue === historyItemText);
      let text = historyItem?.text;

      if (!historyItem) {
        text = inputValue;
        setLocalStorageValue([...historyItems, { id: nanoid(5), text: inputValue, type: AutocompleteItemType.history }]);
      }

      toggleAutocomplete(false);
      navigate({
        pathname: '/search',
        search: `?request=${text}`,
      });
    }
  }, [historyItems, inputValue, navigate, setLocalStorageValue]);

  const onItemClick = useCallback((data: TItemData) => {
    const { text, id } = data;

    setInputValue(text);

    if (!historyItems.find(({ id: historyItemId }) => id === historyItemId)) {
      setLocalStorageValue([...historyItems, { ...data, type: AutocompleteItemType.history }]);
    }

    toggleAutocomplete(false);
    navigate({
      pathname: '/search',
      search: `?request=${text}`,
    });
  }, [historyItems, navigate, setLocalStorageValue]);

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
        onKeyUp={onKeyUp}
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

SearchBar.defaultProps = {
  initialValue: '',
};
