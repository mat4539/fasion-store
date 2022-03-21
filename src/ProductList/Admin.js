import React from "react";
import {ProductList} from "./ProductList";

export const Admin = () => {
    return (
        <div>
            <div className="align-1">
                <div className="container-1">
                    <h1 className="text-1">Product List</h1>
                    <p className="text-1"> Admin Portal</p>
                </div>
            </div>
            <ProductList/>
        </div>
    );
}