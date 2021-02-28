import React, {useState, useEffect, useContext} from "react";
import MediaContext from "../MediaContext.js";
import "./GradientedMedia.css";

function GradientedMedia(){

    const {mediaSrc} = useContext(MediaContext);

    useEffect(() => {
        if(mediaSrc.srcType === "vid"){
            var vid = document.getElementById("MediaFile");
            var t = document.getElementById("slider-video-item"+mediaSrc.srcId);

            var vidTime, tTime;

            tTime = t.currentTime;
            vidTime = tTime;

            console.log("item: " + tTime);
            console.log("md: " + vidTime);

            vid.currentTime = vidTime;

            console.log("after item: " + t.currentTime);
            console.log("after md: " + vid.currentTime);
        }
    }, [mediaSrc])

    return (
        <div className="GradientedMedia">
            {mediaSrc.srcType === "img" && (<img src={mediaSrc.srcUrl} id="MediaFile"/>)}
            {mediaSrc.srcType === "vid" && (<video src={mediaSrc.srcUrl} autoPlay={true} loop={true} muted={true} id="MediaFile"></video>)} 

            <div className="BlackGradientLeftRight"></div>
            <div className="BlackGradientBottomUp"></div>
        </div>
    );
}

export default GradientedMedia;