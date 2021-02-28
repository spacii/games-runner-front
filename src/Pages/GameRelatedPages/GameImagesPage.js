import React, { useEffect, useState } from "react";

import PageTitle from "./PageTitle.js";
import PageContent from "./PageContent.js";

function GameImagesPage({match}){
    
    const [game, setGame] = useState();

    useEffect(() => {
        fetch(`http://localhost:8080/api/games/${match.params.id}`)
            .then(response => response.json())
            .then(gameRes => setGame(gameRes))
            .catch(error => console.log(error));
    }, [])

    return (
        game ? (
            <div className="GameImagesPage">
                <PageTitle gameTitleUrl={game._links.title.href} gameName={game.gameName} gameScreenshotsUrl={game._links.screenshots.href} categoryName="Images"/>
                <PageContent/>
            </div>  
        ) : (
            <h1></h1>
        )
    );
}

export default GameImagesPage;