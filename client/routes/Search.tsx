import React, { useRef } from "react";
import { fetcher } from "../components/SearchHook/fetch";
import { useAutocomplete } from "../components/SearchHook/AutoComplete";
import styles from "./CryptoSearch.module.css";

export default function Search ({
  onSelect,
}: {
  onSelect: (selectedItem: any) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    value,
    onChange,
    onKeyDown,
    suggestions,
    showSuggestions,
    selectedSuggestionIndex,
  } = useAutocomplete(fetcher, onSelect);

  return (
      <div className={styles.container}>
          <h1> Look up your digital devil coins here:</h1>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={styles.input}
      />
      {showSuggestions && (
        <ul className={styles.list}>
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.id}
              className={`${styles.listItem} ${
                selectedSuggestionIndex === index ? styles.selected : ""
              }`}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
