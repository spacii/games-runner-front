import React, {useEffect, useState} from "react";

import PageTitle from "./PageTitle.js";
import PageContent from "./PageContent.js";
import PageBottom from "./PageBottom.js";

function GameRelatedPages({match}){

    const [game, setGame] = useState();

    var categoryName = "";
    var contentUrl = "";

    console.log(match.url.includes("images"))

    if(game){
        if(match.url.includes("images")){
            categoryName = "Images";
            contentUrl = game._links.screenshots.href;
        }
        else if(match.url.includes("videos")){
            categoryName = "Videos";
            contentUrl = game._links.videos.href;
        }
        else if(match.url.includes("awards")){
            categoryName = "Awards"
            //contentUrl = game._links.awards.href;
        }
        else if(match.url.includes("reviews")){
            categoryName = "Reviews"
            //contentUrl = game._links.reviews.href;
        }
        else if(match.url.includes("stores")){
            categoryName = "Stores"
            //contentUrl = game._links.stores.href;
        }
        else if(match.url.includes("relations")){
            categoryName = "Relations"
            //contentUrl = game._links.relations.href;
        }
    }

    useEffect(() => {
        fetch(`https://games-runner-db.herokuapp.com/api/games/${match.params.id}`)
            .then(response => response.json())
            .then(gameRes => setGame(gameRes))
            .catch(error => console.log(error));
    }, [])

    return (
        game ? (
            <div className="GameRelatedPage" style={{width: "1920px"}}>
                <PageTitle gameTitleUrl={game._links.title.href} gameName={game.gameName} gameScreenshotsUrl={game._links.screenshots.href} categoryName={categoryName}/>
                <PageContent contentOf={categoryName} contentUrl={contentUrl}/>
                <PageBottom/>
            </div>  
        ) : (
            <h1></h1>
        )
    );
}

export default GameRelatedPages;