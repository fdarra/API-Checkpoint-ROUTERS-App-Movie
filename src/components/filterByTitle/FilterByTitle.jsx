import React from "react";

const FilterByTitle = ({searchInput, setSearchInput}) => {


  return (
    <div>
      <label style={{marginRight:'15px'}}> Filter By Title </label>
      <input type="tetx" placeholder="search Title" value={searchInput} onChange={(e)=> setSearchInput(e.target.value) } />
    </div>
  );
};

export default FilterByTitle;
