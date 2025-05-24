import "./Search.css";

export const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Zadejte lokalitu"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Vyhledej počasí
      </button>
    </div>
  );
};
