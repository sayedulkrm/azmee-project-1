import React, { useEffect } from "react";
import "../styles/ShopPage.css";
import heroImage from "../content/hero-slide-1.jpg";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider"; // Update the path if necessary

const ShopPage = () => {
    useEffect(() => {
        document.body.classList.add("page-transition");

        return () => {
            document.body.classList.remove("page-transition");
        };
    }, []);

    return (
        <div>
            <Header />
            <HeroSlider />
            <div className="hero-container">
                <img src={heroImage} alt="Hero img" className="hero-img" />
            </div>
        </div>
    );
};

export default ShopPage;

// import React, { useEffect } from "react";
// import "../styles/ShopPage.css";
// import heroImage from "../content/hero-slide-1.jpg";

// const ShopPage = () => {
//     return <div>ShopPage</div>;
// };

// export default ShopPage;
