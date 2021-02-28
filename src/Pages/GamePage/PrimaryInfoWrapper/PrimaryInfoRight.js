import React from "react";

import Persons from "./Persons.js";

function PrimaryInfoRight() {
    const primaryInfoRightStyle = {
        width: "400px",
        display: "inline-block",
    }

    return (
        <div className="PrimaryInfoRight" style={primaryInfoRightStyle}>
            <Persons/>
        </div>
    );
}

export default PrimaryInfoRight;