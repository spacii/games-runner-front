import React from "react";

function PrimaryInfoRaitingNumber() {
    const primaryInfoRaitingNumber = {
        display: "inline-block"
    }

    const aStyle = {
        color: "#093",
        fontSize: "46px",
        fontWeight: "bold"
    }

    return (
        <div className="PrimaryInfoRaitingNumber" style={primaryInfoRaitingNumber}>
            <span>
                <a style={aStyle}>7.223</a>
            </span>
            <span> </span>
            <span>
                457 746
            </span>
        </div>
    );
}

export default PrimaryInfoRaitingNumber;