import React, {useState} from "react";
import {Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"


export const LoginForm = () => {
    console.log("Login form rendered");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const checkRegisteredUser = (event) => {
        if (username==='Admin' && password==='MathewAndDaniella2022'){
            navigate("/admin");
        }else{
            navigate("/productlist");
        }
    }

    const form = (
        <div className="login">
            <div className="passcode-container">
                <div className="center-block">
                <h1 className="passcode">Login</h1>
                <h3 className="passcode">Username</h3>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <h3 className="passcode">Password</h3>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <Button
                    variant="outline-secondary"
                    disabled={username.length === 0 || password.length === 0}
                    onClick={checkRegisteredUser}
                > Login
                </Button>
                </div>
            </div>
        </div>
    );
    return form;
};