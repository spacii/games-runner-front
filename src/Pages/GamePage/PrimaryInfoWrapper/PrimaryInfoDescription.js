import React from "react";

function PrimaryInfoDescription({descriptionText}) {
    const primaryInfoDescriptionStyle = {
        marginBottom: "32px"
    }

    const pStyle = {
        fontSize: "18px",
        fontFamily: "Georgia, serif",
        color: "#393939",
        lineHeight: "24px"
    }

    return (
        <div className="PrimaryInfoDescription" style={primaryInfoDescriptionStyle}>
            <p style={pStyle}>{descriptionText}</p>
        </div>
    );
}

export default PrimaryInfoDescription;