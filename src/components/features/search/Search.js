import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchSearchItem } from './SearchSlice';

function Search() {
 const [search, setSearch] = useState("food");
 const dispatch = useDispatch();

useEffect((search) => {
      dispatch(fetchSearchItem(search))
}, [dispatch, search])

//  function handleSearchClick(e){
//       e.preventDefault();
//       dispatch(searchItem(search));
//  }
 
  return (
        <div className="navbar-item">
            <button className="navbar-logo">
                  <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
            <input id="searchBox" type="text" value={search} onChange={e=> setSearch(e.target.value)}
            placeholder='Type search item'/>
        </div>
  )
}

export default Search();