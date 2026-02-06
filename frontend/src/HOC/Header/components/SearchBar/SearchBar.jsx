import styled from "styled-components";
import IconSearch from "./icon-search.svg?react";
import { useSearch } from "../../../../hooks/useSearch";

const StyledSearchBar = styled.div`
  width: 100%;
  max-width: 35rem;
  min-width: 20rem;
  height: 4.4rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--ui-darker);
  border-radius: 8px;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  input {
    background: none;
    border: none;
    font-size: 1.6rem;
    font-weight: 300;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

const SearchBar = (props) => {
  const { search, setSearch, resetSearch } = useSearch();

  return (
    <StyledSearchBar {...props}>
      <IconSearch onClick={resetSearch} />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
