import React, {useState} from "react";
import {Table} from "react-bootstrap";
import "./productlist.css"
import {AddProductForm} from "./AddProductForm";
import {SearchProductForm} from "./SearchProductForm";

const clothes = [
    {id: 0, name: "Jeans", price: 10, description: "Navy Blue Skinny Style", stock: 5},
    {id: 1, name: "Jeans", price: 20, description: "Dark Blue Flare Style", stock: 5},
    {id: 2, name: "leggings", price: 30, description: "Navy Blue Slim Style", stock: 5},
    {id: 3, name: "leggings", price: 60, description: "Dark Blue Flare Style", stock: 5},
    {id: 4, name: "T-Shirt", price: 80, description: "Red T-Shirt", stock: 5},
    {id: 5, name: "Jacket", price: 50, description: "M12 Jacket", stock: 5},
];

export const ProductList = () => {
    const [id, setID] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const [search, setSearch] = useState("");

    const [productList, setProductList] = useState(clothes);
    const addProduct = (product) => {
        setProductList([...productList, product]);
    };

    return (
        <div className="date-table">
            <SearchProductForm
            search={search}
            setSearch={setSearch}
            />
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Description</th>
                    <th>Product Stock</th>
                </tr>
                </thead>
                <tbody>
                {productList.filter((val => {
                    if (search === ""){
                        return val
                    }else if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                })).map(({name, price, description, stock}, id) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>${price}</td>
                        <td>{description}</td>
                        <td>{stock}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <AddProductForm
                id={id}
                setId={setID}
                name={name}
                setName={setName}
                price={price}
                setPrice={setPrice}
                description={description}
                setDescription={setDescription}
                stock={stock}
                setStock={setStock}
                addProduct={addProduct}
            />
        </div>
    );
}
