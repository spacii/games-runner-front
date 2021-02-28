import React from "react";

import PrimaryInfoRaitingStars from "./PrimaryInfoRaitingStars.js";
import PrimaryInfoRaitingNumber from "./PrimaryInfoRaitingNumber.js";

function PrimaryInfoRaiting() {
    const primaryInfoRaitingStyle = {
        marginBottom: "32px"
    }

    return (
        <div className="PrimaryInfoRaiting" style={primaryInfoRaitingStyle}>
            <h2 style={{color: "#1f1f1f", fontWeight: "600", marginBottom: "8px"}}>Game raiting</h2>
            <div>
                <PrimaryInfoRaitingStars/>
                <PrimaryInfoRaitingNumber/>
            </div>
        </div>
    );
}

export default PrimaryInfoRaiting;