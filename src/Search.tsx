import React, { useState } from "react";



function Search({ handleSearch }) {
  let initial: string = "";
  const [search, setSearch] = useState(initial);

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;
    setSearch(value);
  }

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    handleSearch(search);
    setSearch(initial);
  }

  return (
    <div className="Search">
      <form className="Search-Form" onSubmit={handleSubmit}>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" value={search} onChange={handleChange} />
        <button>Get SW Facts</button>
      </form>
    </div>
  );
}

export default Search;
