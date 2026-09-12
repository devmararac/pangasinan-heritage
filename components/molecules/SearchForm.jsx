"use client";

import { useState } from "react";
import Icon from "../atoms/Icon";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (onSearch) {
      onSearch(query);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl gap-2"
    >
      <label htmlFor="heritage-search" className="sr-only">
        Search heritage sites
      </label>

      <input
        id="heritage-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search heritage sites..."
        className="min-w-0 flex-1 rounded-lg border border-[#e5e1d8] bg-white px-4 py-3 text-[#263238] outline-none focus:ring-2 focus:ring-[#176b5b]"
      />

      <button
        type="submit"
        className="flex items-center gap-2 rounded-lg bg-[#e8b83f] px-4 py-3 font-bold text-[#263238] transition hover:bg-[#dca82c]"
      >
        <Icon name="search" size={18} />
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
}