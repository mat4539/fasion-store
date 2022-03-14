import React from "react";
import {Table} from "react-bootstrap";
import {ProductList} from "./ProductList";

export const Admin = () => {
    return(
        <div className="product-list">
            <div className="txt">
                <h1>Product List</h1>
                <p>Admin Panel</p>
                <ProductList/>
            </div>
        </div>
    )
}