import { useState } from 'react';

function Search({ submitSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function updateSearch(evt) {
    setSearchTerm(evt.target.name);
  }

  return (
    <form onSubmit={submitSearch}>
      <input
        onChange={updateSearch}
        type="text"
        placeholder="Enter search term.."
        name="search"
        value={searchTerm}></input>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Search;