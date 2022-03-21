import React from "react";
import {Table} from "react-bootstrap";
import * as clothesList from "./ProductList";


export const DataList = () => {
    return(
        <div>
            <div className="align-1">
                <div className="container-1">
                    <h1 className="text-1">Product List</h1>
                </div>
            </div>
            <div className="align-table">
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
        </div>
    );
}