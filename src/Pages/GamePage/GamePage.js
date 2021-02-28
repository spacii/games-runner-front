import React, {useEffect, useState} from "react";

import InfoWrapper from "./InfoWrapper/InfoWrapper.js";
import PrimaryInfoWrapper from "./PrimaryInfoWrapper/PrimaryInfoWrapper.js";
import BottomWrapper from "./BottomWrapper/BottomWrapper.js";

import Error404Page from "../ErrorPages/Error404Page.js";

import MediaContext from "./MediaContext.js";

function GamePage({match}) {
  const [result, setResult] = useState(
      {
        isLoaded: false,
        game: {},
        error: null
      }
  );
  
  useEffect(() => {
    //fetch(`http://localhost:8080/api/games/${match.params.id}`)
    fetch(`https://games-runner-db.herokuapp.com/api/games/${match.params.id}`)
      .then(response => {
          if(!response.ok) {
            throw new Error(response);
          }
          
          return response.json();  
      })
      .then(gameResult => {
          setResult(
            {
              isLoaded: true,
              game: gameResult
            }
          );
      })
      .catch(e => {
          setResult({
              isLoaded: true,
              error: e
            }
          );
      })
  }, []);

  if(!result.isLoaded)
    return <p>Loading...</p>
  else if(result.game) {
    return (
      <div style={{position: "absolute"}}>
        <MediaContext.Provider value={{game: result.game, match}}>
          <InfoWrapper/>
          <PrimaryInfoWrapper/>
          <BottomWrapper/>
        </MediaContext.Provider>
      </div>
    );
  } 
  else
    return <Error404Page/>
}

export default GamePage;
