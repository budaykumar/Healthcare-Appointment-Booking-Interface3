function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="w-full p-2 border rounded shadow-sm"
      placeholder="Search by name or specialization"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
