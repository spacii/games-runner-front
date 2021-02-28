import React, { useState } from "react";

var hm = {
    normal: {
        fontSize: "18px",
        fontFamily: "Georgia, serif",
        color: "#393939",
        textDecoration: "none"
    },
    hover: {
        color: "red"
    }
}

function Person({personId, personName}) {
    const personStyle = {
        marginBottom: "6px"
    }

    // const aStyle = {
    //     fontSize: "18px",
    //     fontFamily: "Georgia, serif",
    //     color: "#393939",
    //     textDecoration: "none"
    // }

    const [hover, setHover] = useState(false);

    return (
        <div className="Person" style={personStyle}>
            {/* <a href={"/person/"+personId} style={aStyle}>{personName}</a> */}
            <a href={"/person/"+personId}
                onMouseEnter={()=>{
                    setHover(true);
                }}
                onMouseLeave={()=>{
                    setHover(false);
                }}
                style={{
                    ...hm.normal,
                    ...(hover ? hm.hover : null)
                }}>
                {personName}
            </a>
        </div>
    );
}

export default Person;