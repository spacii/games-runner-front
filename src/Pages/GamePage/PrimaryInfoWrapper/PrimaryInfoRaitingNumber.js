import React, {useContext} from "react";

import MediaContext from "../MediaContext.js";

function PrimaryInfoRaitingNumber() {
    const primaryInfoRaitingNumber = {
        display: "inline-block"
    }

    const aStyle = {
        color: "#093",
        fontSize: "46px",
        fontWeight: "bold"
    }

    const {game} = useContext(MediaContext)

    return (
        <div className="PrimaryInfoRaitingNumber" style={primaryInfoRaitingNumber}>
            <span>
                <a style={aStyle}>{game.rating}</a>
            </span>
            <span> </span>
            <span>
                {game.ratingCounts}
            </span>
        </div>
    );
}

export default PrimaryInfoRaitingNumber;