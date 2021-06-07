import React, {useEffect, useState} from "react";
import Modal from "react-modal";

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

  const [mainMenuIsOpen, setMainMenuIsOpen] = useState(false)
  const mainMenuStyle = {
    content : {
      
    },
    overlay: {zIndex: 1000}
  }
  
  useEffect(() => {
    fetch(`http://localhost:8080/api/games/${match.params.id}`)
    //fetch(`https://games-runner-db.herokuapp.com/api/games/${match.params.id}`)
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
        <div style={{position: "absolute", margin: "16px"}} onClick={() => setMainMenuIsOpen(true)}>
          <div style={{width: "35px", height: "5px", backgroundColor: "white", margin: "6px 0"}}></div>
          <div style={{width: "35px", height: "5px", backgroundColor: "white", margin: "6px 0"}}></div>
          <div style={{width: "35px", height: "5px", backgroundColor: "white", margin: "6px 0"}}></div>
        </div>
        <MediaContext.Provider value={{game: result.game, match}}>
          <InfoWrapper/>
          <PrimaryInfoWrapper/>
          <BottomWrapper/>
        </MediaContext.Provider>
        <Modal isOpen={mainMenuIsOpen} style={mainMenuStyle}>
          <div style={{position: "relative", margin: "16px"}} onClick={() => setMainMenuIsOpen(false)}>
            <div style={{width: "35px", height: "5px", backgroundColor: "black", margin: "6px 0"}}></div>
            <div style={{width: "35px", height: "5px", backgroundColor: "black", margin: "6px 0"}}></div>
            <div style={{width: "35px", height: "5px", backgroundColor: "black", margin: "6px 0"}}></div>
          </div>

          <a href="http://localhost:3000/passport">
            <button>Авторизация/Регистрация</button>
          </a>
        </Modal>
      </div>
    );
  } 
  else
    return <Error404Page/>
}

export default GamePage;
