import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import CartIcons from "./CartIcons";
import './ProductDetails.css';


function ProductDetails() {
    const { id } = useParams();
    const { name, price, description, image_url } = useSelector(st => ({
        ...st.products[id]
    }));

    return (
        <div className="row justify-content-center">
            <div>
                <img
                className="ProductDetails-img card-img-top"
                src={image_url}
                alt={name}
                />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h4>{name}</h4>
                        <p>${price}</p>
                    </div>
                    <p className="text-center">{description}</p>
                    <CartIcons id={id} />
                </div>
                <Link to="/" className="btn btn-block btn-link">
                    Go Back
                </Link>
            </div>


        </div>
    )
}

export default ProductDetails;