import { useMemo } from 'react';
import { TItemData } from 'components/Autocomplete/types';

export function useComposedItems(inputValue: string, historyItems: TItemData[], itemsData: TItemData[]) {
  return useMemo<TItemData[]>(() => {
    const value = inputValue.trim();
    const searchItems = itemsData.filter(({ text }) => value && text.includes(value));
    const filteredHistoryItems = !value ? historyItems : historyItems.filter(({ text }) => text.includes(value));

    const array = [...filteredHistoryItems, ...searchItems];
    array.length = 10;

    return [...new Map(array.filter(Boolean).map((item) => [item.id, item])).values()];
  }, [historyItems, inputValue, itemsData]);
}
