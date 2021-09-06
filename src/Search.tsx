import React, { useState } from "react";

interface handleSearch {
  (term: string): void;
}

function Search(callback: handleSearch) {
  let initial: string = "";
  const [search, setSearch] = useState(initial);

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;
    setSearch(value);
  }

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    callback(search);
    setSearch(initial);
  }

  return (
    <div className="Search">
      <form className="Search-Form" onSubmit={handleSubmit}>
        <label htmlFor="search">Search: </label>
        <select name="term" id="term" onChange={handleChange}>
          <option value="choose" selected>Please select a search term</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="films">Films</option>
          <option value="species">Species</option>
          <option value="vehicles">Vehicles</option>
          <option value="starships">Starships</option>
        </select>
        <button type="submit">Get SW Facts</button>
      </form>
    </div>
  );
}

export default Search;
