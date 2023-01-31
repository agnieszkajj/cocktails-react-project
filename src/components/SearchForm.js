import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const inputRef = React.useRef(null);

  const searchCocktail = () => {
    setSearchTerm(inputRef.current.value);
  };

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={inputRef}
            onChange={searchCocktail}
            autoComplete="off"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
