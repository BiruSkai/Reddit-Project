import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchItem } from './SearchSlice';

function Search() {
 const [search, setSearch] = useState("");
 const dispatch = useDispatch();

 function handleSearchClick(e){
      e.preventDefault();
      dispatch(searchItem(search));
 }
 
  return (
        <div className="navbar-item">
            <button className="navbar-logo" onClick={() => handleSearchClick}>
                  <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
            <input id="searchBox" type="text" value={search} onChange={e=> setSearch(e.target.value)}
            placeholder='Type search item'/>
        </div>
  )
}

export default Search();