import React, {useState} from "react";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

function Product(props){
    const {id, name, price, imageUrl, description} = props;

    const [descriptions, setDescriptions] = useState(description)

    function refreshPage(){
        setTimeout(()=>{
            window.location.reload(false);
        }, 100);
    }

    return(
        <div className="product" key = {id}>
            <img className="image-product" src = {imageUrl} alt = {`image of ${name}`}></img>
            <h3>{name}</h3>
            <p>{descriptions}</p>
            <span>${price}</span>
            <div>
                <button onClick={refreshPage} className="snipcart-add-item AdjustSize" 
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