import React, { useState } from "react";
import debounce from "lodash.debounce";
import "../components/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const useSearch = (data) => {
  const original = React.useMemo(() => data, [data]);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const searchInput = React.useRef(null);

  function handleDebounceFn(searchQuery, originalData) {
    const newFilter = originalData.filter((value) =>
      value?.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    setFilteredData(newFilter);
  }

  const debounceFn = React.useCallback(debounce(handleDebounceFn, 300), []);

  React.useEffect(() => {
    searchInput?.current?.focus();
  }, [filteredData]);

  React.useEffect(() => {
    debounceFn(wordEntered, original);

    searchInput?.current?.focus();

    return () => debounceFn.cancel();
  }, [wordEntered, debounceFn, original]);

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const Search = ({ placeholder }) => (
    <div className="search">
      <div className="searchInputs">
        <input
          ref={searchInput}
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={(e) => setWordEntered(e.target.value)}
        />
        <div className="searchIcon">
          {wordEntered === "" ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
    </div>
  );

  return [filteredData, Search];
};

export default useSearch;
