import React from "react";

import PrimaryInfo from "./PrimaryInfo.js";
import RelatedGames from "./RelatedGames.js";

function PrimaryInfoLeft() {
    const primaryInfoLeftStyle = {
        width: "1000px",
        display: "inline-block",
        marginLeft: "160px",
        marginRight: "200px"
    }

    const primarySliders = {
        
    }

    return (
        <div className="PrimaryInfoLeft" style={primaryInfoLeftStyle}>
            <PrimaryInfo/>
            <RelatedGames/>
        </div>
    );
}

export default PrimaryInfoLeft;