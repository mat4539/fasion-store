import React from "react";

export const AddProductForm = ({
    id, setID, name, setName, price, setPrice, description, setDescription, stock, setStock, addProduct,
}) => {
    return (
        <div>
            <h1 className="txt">Add Student</h1>
            <label className="txt">id: </label>
            <input
                type="number"
                value={id}
                onChange={(e) => setID(e.target.value)}>
            </input>
            <label className="txt">Name: </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}>
            </input>
            <label className="txt">Price: </label>
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}>
            </input>
            <label className="txt">Description: </label>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}>
            </input>
            <label className="text">Stock: </label>
            <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}>
            </input>

            <button
                onClick={() =>
                    addProduct({id: id, name: name, price: price, description: description, stock: stock})
                }
            >
                Add Product
            </button>
        </div>
    );
};
