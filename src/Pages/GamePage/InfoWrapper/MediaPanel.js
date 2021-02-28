import React, {useEffect, useState} from "react";
import "./MediaPanel.css"
import GradientedMedia from "./GradientedMedia";
import MediaSlider from "./MediaSlider.js";

function MediaPanel(){
    return (
        <div className="MediaPanel">
            <div className="BlackPart"></div>
            <MediaSlider/>
            {/*<GradientedMedia/>*/}
        </div>
    );
}

export default MediaPanel;