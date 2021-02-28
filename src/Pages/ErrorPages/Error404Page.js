import React from "react";

import CpPrice from "./captain-price.jpeg";

function Error404Page(){
    const errorWrapperStyle = {
        width: "100%",
        height: "100%",
        background: "#0c0c0c"
    }

    const errorContaierStyle = {
        display: "flex",
        width: "950px",
        position: "relative",
        left: "50%",
        transform: "translate(-50%, 0)",
        height: "100vh"
    }

    const errorMessageStyle = {
        color: "white",
        maxWidth: "410px",
        marginRight: "32px",
        display: "inline-block",
        marginTop: "256px"
    }

    const errorImageWrapperStyle = {
        width: "500px",
        height: "280px",
        display: "inline-block",
        marginTop: "256px"
    }

    const errorImageStyle = {
        width: "100%",
        height: "100%",
        obectFit: "cover",
        borderRadius: "8px"
    }

    return (
        <div className="error-wrapper" style={errorWrapperStyle}>
            <div className="error-contaier" style={errorContaierStyle}>
                <div className="error-message" style={errorMessageStyle}>
                    <h1 style={{fontSize: "64px", lineHeight: "52px", margin: "0"}}>404. Page not found</h1>
                    <p style={{fontSize: "24px", lineHeight: "24px"}}>Perhaps it was moved, or you entered the wrong page address.</p>
                    <div style={{marginTop: "79px"}}>
                        <a style={{textDecoration: "none", color: "white", fontSize: "18px"}} href="/games">Go to Main page</a>
                    </div>
                </div>
                <div className="error-image-wrapper" style={errorImageWrapperStyle}>
                    <img src={CpPrice} style={errorImageStyle}/>
                </div>
            </div>
        </div>
    );
}

export default Error404Page;