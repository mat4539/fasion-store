import React from "react";
import {Table} from "react-bootstrap";
import "./productlist.css"

const clothes = [
    {id: "1", name: "Jeans", price: "10" , description: "Navy Blue Skinny Style", stock: "5"},
    {id: "2", name: "Jeans", price: "20" , description: "Dark Blue Flare Style", stock: "5"},
    {id: "3", name: "leggings", price: "30" , description: "Navy Blue Slim Style", stock: "5"},
    {id: "4", name: "leggings", price: "60" , description: "Dark Blue Flare Style", stock: "5"},
    {id: "5", name: "T-Shirt", price: "80" , description: "Red T-Shirt", stock: "5"},
    {id: "6", name: "Jacket", price: "50" , description: "M12 Jacket", stock: "5"}
];

export const ProductList = () => {
   return(
        <div className="date-table">
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
            {clothes.map(({name, price, description, stock}, id) => (
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
