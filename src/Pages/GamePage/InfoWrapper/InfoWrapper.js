import React from "react";
import InfoPanel from "./InfoPanel.js";
import MediaPanel from "./MediaPanel.js";

function InfoWrapper() {
    const infoWrapperStyle = {
        marginBottom: "50px"    
    }

    return (
       <div className="InfoWrapper" style={infoWrapperStyle}>
           <InfoPanel/>
           <MediaPanel/>
       </div>
   ); 
}

export default InfoWrapper;