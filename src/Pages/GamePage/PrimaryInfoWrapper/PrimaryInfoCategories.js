import React from "react";

import PrimaryInfoCategory from "./PrimaryInfoCategory.js";

function PrimaryInfoCategories({gameId}) {
    const primaryInfoCategoriesStyle = {
        marginBottom: "32px"
    }

    var baseUrl = "/game/" + gameId;

    return (
        <div className="PrimaryInfoCategories" style={primaryInfoCategoriesStyle}>
            <PrimaryInfoCategory categoryName="Overview" categoryUrl={baseUrl + "/overview"} isCurrent="true"/>
            <PrimaryInfoCategory categoryName="Awards" categoryUrl={baseUrl + "/awards"}/>
            <PrimaryInfoCategory categoryName="Images" categoryUrl={baseUrl + "/images"}/>
            <PrimaryInfoCategory categoryName="Videos" categoryUrl={baseUrl + "/videos"}/>
            <PrimaryInfoCategory categoryName="Reviews" categoryUrl={baseUrl + "/reviews"}/>
            <PrimaryInfoCategory categoryName="Stores" categoryUrl={baseUrl + "/stores"}/>
            <PrimaryInfoCategory categoryName="Relations" categoryUrl={baseUrl + "/relations"}/>
        </div>
    );
}

export default PrimaryInfoCategories;