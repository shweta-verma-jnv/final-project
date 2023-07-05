import React, { useContext } from "react";
import "./product.scss";
import { AuthContext } from "../../context/authContext";

const Product = (props) => {

    const { currentUser } = useContext(AuthContext);

    const {name, pic, price, place} = props;

    return (
        <div className="product">
            <div className="image">
                <img src={pic} alt="" />
            </div>
            <div className="product-details">
                <span className="price">&#8377; {price}</span>
                <span className="name">{name}</span>
                <span className="place">{place}</span>
            </div>
        </div>
    )
}

export default Product;