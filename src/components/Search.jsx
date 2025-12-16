function Search({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Kitob nomini yozing..."
      onChange={(e) => setSearch(e.target.value)}
      className="search"
    />
  );
}

export default Search;
