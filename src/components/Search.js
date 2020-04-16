import React, { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.handleSubmit(search);
    e.target.reset();
    setSearch("");
  };

  return (
    <form class="w-full max-w-sm m-16 " onSubmit={onSubmit}>
      <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded "
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
