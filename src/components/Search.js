import React from "react";
//control the input
import {useState} from "react"


function Search({onSearching}) { //prop for searching

  const [search, setSearch] = useState("") //controll the form

  function handleChange(e){ //should filter what we entered
    setSearch(e.target.value) //update state
    onSearching(search)
  }
  return (
    <div className="ui large fluid icon input">
      <input value={search} onChange={handleChange}
        type="text"
        placeholder="Search your Recent Transactions"
        // onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
