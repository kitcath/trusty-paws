import React, {useState} from 'react';

 const Search = () => {

    const [query, setQuery] = useState("");
    const [pets, setPets] = useState([]);

    return (
        <div class="input-group">
        <div class="form-outline">
         <input 
         id="search-focus"
         type="search" 
         id="form1" 
         class="form-control" 
         placeholder="Search"/>
        </div>
        <button type="button" class="btn btn-outline-primary">search</button>
        
  
</div>
    )
}

export default Search;