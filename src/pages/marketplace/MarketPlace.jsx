import React, { useContext } from "react";
import "./marketplace.scss";
import { AuthContext } from "../../context/authContext";
import Product from "../../components/product/Product";

const MarketPlace = () => {

    const { currentUser } = useContext(AuthContext);


    const products = [
        {
            name: 'Scooter',
            pic: '',
            price: 2100,
            place: 'Hoshiarpur, Punjab',
        },
        {
            name: 'Scooter',
            pic: '',
            price: 2100,
            place: 'Hoshiarpur, Punjab',
        },
        {
            name: 'Scooter',
            pic: '',
            price: 2100,
            place: 'Hoshiarpur, Punjab',
        },
        {
            name: 'Scooter',
            pic: '',
            price: 2100,
            place: 'Hoshiarpur, Punjab',
        },
        {
            name: 'Scooter',
            pic: '',
            price: 2100,
            place: 'Hoshiarpur, Punjab',
        },
        {
            name: 'Scooter',
            pic: '',
            price: 2100,
            place: 'Hoshiarpur, Punjab',
        },
        {
            name: 'Scooter',
            pic: '',
            price: 2100,
            place: 'Hoshiarpur, Punjab',
        },
        {
            name: 'Scooter',
            pic: '',
            price: 2100,
            place: 'Hoshiarpur, Punjab',
        },
    ]

    // Temporary
    const pic = "https://tse2.mm.bing.net/th?id=OIP.3x7JP8iS_fDxkkRWDP7sHAHaHa&pid=Api&P=0&h=180";


    return (
        <div className="product-wrapper">
            <div className="category">
                <div className="category-heading">
                    <h3>Clothing</h3>
                    <span>See all</span>
                </div>
                <div className="products">
                {products.map((product) => (
                    <Product name={product.name} pic={pic} price={product.price} place={product.place} />
                ))}
                </div>
            </div>
            <div className="category">
                <div className="category-heading">
                    <h3>Vehicles</h3>
                    <span>See all</span>
                </div>
                <div className="products">
                {products.map((product) => (
                    <Product name={product.name} pic={pic} price={product.price} place={product.place} />
                ))}
                </div>
            </div>
            <div className="category">
                <div className="category-heading">
                    <h3>Tools</h3>
                    <span>See all</span>
                </div>
                <div className="products">
                {products.map((product) => (
                    <Product name={product.name} pic={pic} price={product.price} place={product.place} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default MarketPlace;