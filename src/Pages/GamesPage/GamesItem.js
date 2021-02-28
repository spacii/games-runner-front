import React, { useEffect, useState } from "react";

function GamesItem({game}){
    var gamesItemStyle = {
        width: "140px",
        height: "250px",
        display: "inline-block",
        overflow: "hidden",
        marginLeft: "16px",
        marginRight: "16px",
        marginBottom: "32px"
    }
    
    var style = {
        width: "140px",
        height: "210px",
        borderRadius: "8px",
        marginBottom: "2px"
    }
    
    var gamePosterStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "8px"
    }

    var aStyle = {
        textDecoration: "none",
        color: "#060077",
        fontSize: "16px",
        fontFamily: "Georgia, serif"
    }

    const [gamePoster, setGamePoster] = useState();

    useEffect(() => {
        fetch(game._links.poster.href)
            .then(gamePosterResponse => gamePosterResponse.json())
            //.then(gamePosterResult => setGamePoster(gamePosterResult._links.resource.href))
            .then(gamePosterResult => setGamePoster("https://games-runner-media.s3.us-east-2.amazonaws.com/"+ gamePosterResult.imageType+"/"+gamePosterResult.imageName+"."+gamePosterResult.imageFormat))
        }, [])

    return (
        <a href={"/game/" + game.gameId} style={aStyle}>
            <div style={gamesItemStyle}>
                <div style={style}>
                    <img src={gamePoster} style={gamePosterStyle}/>
                </div>
                <a href={"/game/" + game.gameId} style={aStyle}>{game.gameName}</a>
            </div>
        </a>
    );
}

export default GamesItem;