import React, {useContext} from "react";

import PrimaryInfoCategories from "./PrimaryInfoCategories.js";
import PrimaryInfoDescription from "./PrimaryInfoDescription.js";
import PrimaryInfoRaiting from "./PrimaryInfoRaiting.js";

import MediaContext from "../MediaContext.js";

function PrimaryInfo() {
    const primaryInfoStyle = {
        
    }

    const {game, match} = useContext(MediaContext);

    return (
        <div className="PrimaryInfo" style={primaryInfoStyle}>
            <PrimaryInfoCategories gameId={match.params.id}/>
            <PrimaryInfoDescription descriptionText={game.gameDescriptionFull}/>
            <PrimaryInfoRaiting/>
        </div>
    );
}

export default PrimaryInfo;