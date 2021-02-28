import React from "react";

function PageNotReady(){
    const pageNotReadyStyle = {
        position: "absolute",
        top: "64px",
        left: "50%",
        transform: "translate(-50%, 0)"
    }
    
    return (
        <div className="PageNotReady" style={pageNotReadyStyle}>
            <h1>This page is not ready yet!</h1>
            <h3><a href="/games">To main page</a></h3>
        </div>
    );
}

export default PageNotReady;