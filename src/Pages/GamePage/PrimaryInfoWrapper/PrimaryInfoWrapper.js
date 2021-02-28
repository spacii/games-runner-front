import React from "react";

import PrimaryInfoLeft from "./PrimaryInfoLeft.js";
import PrimaryInfoRight from "./PrimaryInfoRight.js";

function PrimaryInfoWrapper(){
    const primaryInfoWrapperStyle = {
        width: "1920px",
        position: "relative",
        display: "flex",
        marginBottom: "50px"
    }

    return (
        <div className="PrimaryInfoWrapper" style={primaryInfoWrapperStyle}>
            <PrimaryInfoLeft />
            <PrimaryInfoRight />
        </div>
    );
}

export default PrimaryInfoWrapper;