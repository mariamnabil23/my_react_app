import React from "react";
import Button from "./Button";

function Product (props){
    return(
        <div className="Product">
            <h1> {props.title} </h1>
            <p> {props.desc} </p>
            <span> {props.price} </span>
            <Button />
        </div>
    )
}

export default Product;