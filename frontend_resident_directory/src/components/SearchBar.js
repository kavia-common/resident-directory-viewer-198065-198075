import React from 'react';

/**
 * SearchBar is a controlled input used to filter residents by name.
 */
// PUBLIC_INTERFACE
export default function SearchBar({ value, onChange }) {
  return (
    <div className="SearchBar" role="search">
      <label className="SearchBar-label" htmlFor="resident-search">
        Search residents
      </label>
      <div className="SearchBar-inputWrap">
        <span className="SearchBar-icon" aria-hidden="true">
          ⌕
        </span>
        <input
          id="resident-search"
          className="SearchBar-input"
          type="text"
          inputMode="search"
          placeholder="Search by name…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search residents by name"
          autoComplete="off"
        />
        {value ? (
          <button
            type="button"
            className="SearchBar-clear"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
