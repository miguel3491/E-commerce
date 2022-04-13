import React from "react";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

function Product(props){
    const {id, name, price, imageUrl, description} = props;

    return(
        <div className="product" key = {id}>
            <img className="image-product" src = {imageUrl} alt = {`image of ${name}`}></img>
            <h3>{name}</h3>
            <p>{description}</p>
            <span>${price}</span>
            <div className="Product-center">
                <button className="snipcart-add-item AdjustSize" 
                data-item-id = {id}
                data-item-image = {imageUrl}
                data-item-name = {name}
                data-item-description = {description}
                data-item-price = {price}>
                <LocalGroceryStoreIcon id="shop-icon" fontSize="small"></LocalGroceryStoreIcon>Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Product;

// {`${source.description.substring(0, 40)}...`} 