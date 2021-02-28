import React from "react";

import "./ImageItem.css"

function VideoItem({videoSrc}){
    return (
        <div className="ImageItem">
            <video src={videoSrc}  autoPlay={true} loop={true} muted={true} className="ImageItemInner"/>
        </div>
    );
}

export default VideoItem;