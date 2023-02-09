import React from "react";

export const useAutocomplete = <T extends {}>(
  fetcher: (searchText: string) => Promise<T[]>,
  handleSelection: (selectedItem: T) => void
) => {
  return {
    value: "",
    suggestions: [],
    selectedSuggestionIndex: 0,
    showSuggestions: false,
    onChange: () => {},
    onKeyDown: () => {},
  };
};
