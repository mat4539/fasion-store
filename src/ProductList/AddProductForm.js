import React from "react";
import {Button} from "bootstrap";

export const AddProductForm = ({
                                   name,
                                   setName,
                                   price,
                                   setPrice,
                                   description,
                                   setDescription,
                                   stock,
                                   setStock,
                                   addProduct,
                               }) => {
    return (
        <div>
            <div className="align-1">
                <div className="container-1">
                    <h1 className="text-1">Add Product</h1>
                    <label className="text-1">Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </input>
                    <label className="text-1">Price: </label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}>
                    </input>
                    <label className="text-1">Description: </label>
                    <input
                        type="text-1"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>
                    </input>
                    <label className="text-1">Stock: </label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}>
                    </input>
                    <br/>
                    <button
                        variant="outline-secondary"
                        disabled={name.length === 0 || price.length === 0 || price.description === 0 || stock.length === 0}
                        onClick={() =>
                            addProduct({name: name, price: price, description: description, stock: stock})
                        }
                    > Add Product
                    </button>
                </div>
            </div>
        </div>
    );
};
