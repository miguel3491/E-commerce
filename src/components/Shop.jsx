import React, {useState} from "react";
import products from "../assets/products.json"
import Product from "./Product"
import {slice, concat} from 'lodash';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';


function Shop(props){
    const [items, setItems] = useState(products); // Display array from products.json.
    const [searchInput, setSearchInput] = useState(""); // Search bar.
    const [filter, setFilter] = useState([]); // Filter Function. 

    const [list, setList] = useState(slice(items, 0, 6)) // Set the limit to 6 before clicking the button.
    const [index, setIndex] = useState(6);
    const [showMore, setShowMore] = useState(true);

    const searchItems = (searchValue) => {
    setSearchInput(searchValue)
        const filtereData = items.filter((item) => {
            return Object.values(item).join("").toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilter(filtereData)
    }

    const showItems = () => {
       const newIndex = index + 10;
       const newShowMore = newIndex < (50 - 1);
       const newList = concat(list, slice(items, index, newIndex));
       setIndex(newIndex);
       setList(newList);
       setShowMore(newShowMore);
    }

    return(
        <div>
            <div className="Portrait-shop">
                <h2 className="Portrait-text">Main Content</h2>
                <p className="Portrait-text">Home / Main Content</p>
            </div>
            <div className="Search-bar">
                      <TextField onChange={(e) => searchItems(e.target.value)} placeholder="Search" variant = "standard" InputProps = {{startAdornment: (
                            <InputAdornment position = "start">
                        <SearchIcon></SearchIcon>
                    </InputAdornment>
                )}}></TextField>
            </div>
            <div className="grid">
                {searchInput.length > 1 ? (
                    filter.map((item, i) => (
                            <Product {...item} key = {i}></Product>
                        ))
                    ) :
                    list.map((source, i) => (  
                        <Product 
                        id = {source.id} 
                        name = {source.name} 
                        price = {source.price} 
                        imageUrl = {source.imageUrl} 
                        description = {`${source.description.substring(0, 40)}...`} 
                        key = {i}>
                        </Product>
                    ))}
            </div>
                <div className="Add-more">
                    {showMore && <Button style = {{width: "25%"}} variant = "contained" onClick={showItems}>Load More</Button>}
                </div>
                <div className="cart-overlay"
                id = "snipcart"
                data-api-key = "ZWNlMzk4NDUtMTc4NS00ZmMzLThjYTEtNmVmYjgwNmNkYTZhNjM3ODQwOTMyMjIzODUyODM5"
                hidden> 
            </div>
        </div>    
    )
}

export default Shop;


// items.map((source, i) => i < 6 && (  // Render a limit of 6 items on the array. 