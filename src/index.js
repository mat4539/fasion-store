import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {LoginForm} from "./LoginForm/LoginForm";
import {Admin} from "./ProductList/Admin";
import {Navigation} from "./Navigation/Navigation";
import {Footer} from "./Navigation/Footer";
import {DataList} from "./ProductList/DataList";

ReactDOM.render(
    <React.StrictMode>
        <body>
            <div className="index-layout">
                <Navigation/>
                <div className="index-content">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="/LoginForm" element={<LoginForm />} />
                            <Route path="/ProductList" element={<DataList />}/>
                            <Route path="/Admin" element={<Admin />}/>
                        </Routes>
                    </BrowserRouter>
                </div>
                <Footer/>
            </div>
        </body>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
