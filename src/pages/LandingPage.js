import React, { useEffect, useState, useRef } from "react";
import PasswordForm from "../components/PasswordForm.js";
import videoSource from "../content/Intro.mp4";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
import axios from "axios";

const LandingPage = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [currencyDropdownVisible, setCurrencyDropdownVisible] =
        useState(false);
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleVideoLoaded = () => {
            setVideoLoaded(true);
        };

        const videoElement = document.querySelector("video");
        videoElement.addEventListener("loadeddata", handleVideoLoaded);

        return () => {
            videoElement.removeEventListener("loadeddata", handleVideoLoaded);
        };
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const target = event.target;

            if (
                (!target.classList.contains("join-dropdown") &&
                    !dropdownRef.current?.contains(target)) ||
                target.classList.contains("hero")
            ) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!email || !firstName) {
            console.log("Please fill in all the required fields");
            return;
        }

        const formData = {
            email,
            firstName,
        };

        try {
            const response = await axios.post("/submit-form", formData);
            console.log(response.data);
            setSubmitted(true);

            if (password === "sicko") {
                document.body.classList.add("page-transition");

                setTimeout(() => {
                    navigate("/shop");
                }, 500);
            } else {
                setPassword("");
                alert("Invalid password!");
            }
        } catch (error) {
            console.log("Error submitting form:", error);
        } finally {
            setDropdownVisible(false);
        }
    };

    const handleDropdownBlur = (event) => {
        const target = event.target;

        if (
            target.classList.contains("join-dropdown") ||
            dropdownRef.current?.contains(target)
        ) {
            return;
        }

        setDropdownVisible(false);
    };

    const handleCurrencyButtonClick = () => {
        setCurrencyDropdownVisible(!currencyDropdownVisible);
    };

    return (
        <div className="hero" onClick={handleDropdownBlur}>
            <video
                className={`hero-video ${videoLoaded ? "fade-in" : ""}`}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={videoSource} type="video/mp4" />
            </video>
            <div className={`container ${videoLoaded ? "fade-in" : ""}`}>
                <button
                    className={`currency-button 
        ${currencyDropdownVisible ? "active" : ""}`}
                    onClick={handleCurrencyButtonClick}
                >
                    Australia $
                </button>
                {currencyDropdownVisible && (
                    <div className="currency-dropdown">
                        <div className="currency-container">
                            <p className="current-location">CURRENT LOCATION</p>
                            <p>
                                You are currently shipping to Australia and your
                                order will be billed in AUD $.
                            </p>
                            <div className="countries-regions">
                                <p>ALL COUNTRIES AND REGIONS</p>
                                <span>[225]</span>
                            </div>
                        </div>
                    </div>
                )}
                <PasswordForm />
                <form id="password-form" onSubmit={handleFormSubmit}>
                    <div className="join-button">
                        <button
                            className={`join-dropdown ${
                                dropdownVisible ? "active" : ""
                            }`}
                            type="button"
                            onClick={() => setDropdownVisible(!dropdownVisible)}
                        >
                            JOIN THE WAITLIST
                        </button>
                        {dropdownVisible && !submitted && (
                            <div className="dropdown-content" ref={dropdownRef}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="E-MAIL"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="input-field"
                                    />
                                    <hr className="form-divider" />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                        className="input-field"
                                    />
                                    <hr className="form-divider" />
                                </div>
                                <button type="submit">Submit</button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LandingPage;
