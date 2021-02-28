import React, {useEffect, useState} from "react";

import GamesItem from "./GamesItem.js";

function GamesPage(){

    const gamesStyle = {
        width: "860px",
        position: "absolute",
        top: "64px",
        left: "50%",
        transform: "translate(-50%, 0)"
    }

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("https://games-runner-db.herokuapp.com/api/games")
            .then(gamesResponce => gamesResponce.json())
            .then(gamesResult => setGames(gamesResult._embedded.games))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="Games" style={gamesStyle}>
            {
                games && (
                    games.map(game => {
                        return <GamesItem game={game}/>
                    })
                )
            }
        </div>
    );
}

export default GamesPage;