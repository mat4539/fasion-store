import React from "react";
import {Table} from "react-bootstrap";
import * as clothesList from "./Data";
import "./productlist.css"

export const ProductList = () => {
   return(
        <div className="product-list">
        <h1>Product List</h1>
         <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Description</th>
                <th>Product Stock</th>
            </tr>
            </thead>
            <tbody>
            {clothesList.clothes.map(({name, price, description, stock}, id) => (
                <tr key={id}>
                   <td>{name}</td>
                   <td>${price}</td>
                   <td>{description}</td>
                   <td>{stock}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    );
}
