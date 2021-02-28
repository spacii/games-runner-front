import React from "react";

function PrimaryInfoCategory({categoryName, categoryUrl, isCurrent}) {
    var primaryInfoCategoryStyle = {
        display: "inline-block",
        marginRight: "16px"
    }

    var aStyle = {
        textDecoration: "none",
        color: "#1f1f1f",
        fontSize: "20px",
        fontFamily: "Georgia, serif"
    }

    if(isCurrent){
        primaryInfoCategoryStyle = {
            display: "inline-block",
            marginRight: "16px",
            borderBottom: "2px solid red"
        }

        aStyle = {
            textDecoration: "none",
            color: "#1f1f1f",
            fontSize: "20px",
            fontFamily: "Georgia, serif",
            fontWeight: "bold"
        }
    }

    return (
        <div className="PrimaryInfoCategory" style={primaryInfoCategoryStyle}>
            <a style={aStyle} href={categoryUrl}>{categoryName}</a>
        </div>
    );
}

export default PrimaryInfoCategory;