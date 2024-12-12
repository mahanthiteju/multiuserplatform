import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const sendSign = await fetch(`http://localhost:4000/user/login`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const response = await sendSign.json();
            if (sendSign.ok) {
                alert("login successful");
                console.log(response);
            } else {
                alert("User not found");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <h1>Login</h1>
                <div>
                    <input type="email" name="email" id="" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                    <input type="password" name="password" id="" placeholder="password" onChange={(e) => setpassword(e.target.value)} />
                    <button onClick={onSubmit} > Login</button>
                </div>
                <div>
                    <p>
                        Don't have an account?<Link to="/Signups">signup</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;