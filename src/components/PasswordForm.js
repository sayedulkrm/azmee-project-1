import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordForm = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the entered password is correct
        if (password === "sicko") {
            // Navigate to the ShopPage
            navigate("/shop");
        } else {
            // Clear the password input
            setPassword("");
            // Show an error message or perform any other action
            alert("Invalid password!");
        }
    };

    return (
        <form className="password-form" onSubmit={handleSubmit}>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
                placeholder="Enter Password"
            />
        </form>
    );
};

export default PasswordForm;
