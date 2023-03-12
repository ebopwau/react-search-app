export type TAutocomplete = {
    items: TItemData[],
    onItemClick: onItemClick
    onItemRemove: onItemRemove
}

export type TItemData = {
  id: number
  text: string
  type: AutocompleteItemType
}

export type TAutocompleteItem = {
  id: number
  text: string
  type: AutocompleteItemType
  onClick: onItemClick
  onRemove: onItemRemove
}

type onItemClick = (data: TItemData) => void
type onItemRemove = (data: TItemData) => void

export enum AutocompleteItemType {
    history = 'HISTORY',
    search = 'SEARCH',
}
