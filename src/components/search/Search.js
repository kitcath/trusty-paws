import React, {useState, useEffect} from 'react';
import {PetList} from '../pets/PetList';


const Search = () => {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState([]);

    /*calls for the API */
  const getProductRequest = async () => {
    

      const url = `https://www.omdbapi.com/?s=${query}&apikey=c2cd3803`
      const response = await fetch(url);
  
      /*converts HTTP request into JSON format */
      const responseJson = await response.json(); 
      setProducts(responseJson.Search);
      console.log(products);
    
  }
  /*loads when app is used for the first time */
  useEffect(() => {
    getProductRequest(query);
  }, [query]);

    return (
        <>


  <div class="form-outline">
     <input 
     type="search"
      id="form1" 
      class="form-control" 
      placeholder="Search"
      aria-label="Search"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
       />
  </div>
  
  <div className="pet-container">
        <PetList pets = {products} />
  </div>
          
        </>
    )
}

export default Search;
