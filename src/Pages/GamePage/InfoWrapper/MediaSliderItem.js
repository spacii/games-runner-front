import React from "react";

function MediaSliderItem({srcType, srcUrl}) {
    const itemStyle = {
        width: "1280px",
        height: "720px",
        position: "relative"
    }

    const itemStyleInner = {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute"
    }

    return (
        <div style={itemStyle}>
            {srcType === "video" && (<video src={srcUrl} autoPlay={true} loop={true} muted={true} style={itemStyleInner}></video>)}
            {srcType === "image" && (<img src={srcUrl} style={itemStyleInner}/>)}
        </div>
    );
}

export default MediaSliderItem;