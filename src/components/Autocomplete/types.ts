export type TAutocomplete = {
    items: TAutocompleteItem[]
}

export type TAutocompleteItem = {
  text: string
  type: AutocompleteItemType
}

export enum AutocompleteItemType {
    history = 'HISTORY',
    search = 'SEARCH',
}
