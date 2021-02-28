import React from "react";

import PrimarySlider from "./PrimarySlider.js";

function SequelsAndPrequels({header}) {
    const sequelsAndPrequelsStyle = {
        width: "450px",
        display: "inline-block",
        marginRight: "50px"
    }

    return (
        <div className="SequelsAndPrequels" style={sequelsAndPrequelsStyle}>
            <h2 style={{color: "#1f1f1f", fontWeight: "600", marginBottom: "8px"}}>{header}</h2>
            <PrimarySlider>
                
            </PrimarySlider>
        </div>
    );
}

export default SequelsAndPrequels;