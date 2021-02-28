import React from "react";

import "./ImageItem.css"

function ImageItem({imageSrc}){
    return (
        <div className="ImageItem">
            <img src={imageSrc} className="ImageItemInner"/>
        </div>
    );
}

export default ImageItem;