import React from "react";
import "./productlist.css"
import {ProductList} from "./ProductList";

export const DataList = () => {
    return(
        <div className="product-list">
            <h1 className="txt">Product List</h1>
            <ProductList/>
        </div>
    );
}