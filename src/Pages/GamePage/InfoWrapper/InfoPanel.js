import React, {useEffect, useState, useContext} from "react";
import "./InfoPanel.css";

import MediaContext from "../MediaContext.js";

import OriginLogo from "../resources/origin_logo.png";
import PsStoreLogo from "../resources/playstation_store_logo.png";
import SteamLogo from "../resources/steam_logo.png";
import EpicGamesStoreLogo from "../resources/epic_games_store_logo.png";
import BattleNetLogo from "../resources/battle_net_logo.png";
import MicrosoftStoreLogo from "../resources/microsoft_store_logo.png";

function InfoPanel(){
    const {game} = useContext(MediaContext);

    const [gameTitle, setGameTitle] = useState(""); 

    useEffect(() => {
        //fetch(game._links.title.href) https://games-runner-media.s3.us-east-2.amazonaws.com/
            // .then(titleResponce => titleResponce.json())
            // .then(titleResult => setGameTitle(titleResult._links.resource.href))
            // .catch(error => console.log(error))

        fetch(game._links.title.href)
            .then(titleResponce => titleResponce.json())
            .then(titleResult => setGameTitle("https://games-runner-media.s3.us-east-2.amazonaws.com/"+ titleResult.imageType+"/"+titleResult.imageName+"."+titleResult.imageFormat))
            .catch(error => console.log(error))
    }, [])

    console.log(gameTitle);

    return (
        <div className="InfoPanel">
            <div className="GameLogo">
                {
                    (!gameTitle.includes("undefined")) ? (
                        //<img src={gameTitle} id="GameLogoImage"/>
                        <img src={gameTitle} id="GameLogoImage"/>
                    ) : (
                        <h1 style={{color: "white"}}>{game.gameName}</h1>
                    )
                }
            </div>
            <div className="GameInfo">
                <div className="GameInfoRaiting">
                    7.2
                </div>
                <div className="GameInfoGeneral">
                    <span className="GameInfoGeneralSpan">
                        {game.gameYear}
                        {", "}
                        {
                            game.genres.map((genre, i) => {
                                if(game.genres.length === i+1){
                                    return genre.genre;
                                }
                                else{
                                    return genre.genre + ", ";
                                }
                            })
                        }
                    </span>
                    <span className="GameInfoGeneralSpan">
                        {
                            game.platforms.map((platform, i) => {
                                if(game.platforms.length === i+1){
                                    return platform.platform;
                                }
                                else{
                                    return platform.platform + ", ";
                                }
                            })
                        }
                    </span>
                    <span className="GameInfoGeneralSpan">
                        {game.age}
                    </span>
                </div>
            </div>
            <div className="GameDescription">
                <p>
                    {game.gameDescription}
                </p>
            </div>
            <div className="GamePurchase">
                <div className="GamePurchaseText">Purchase</div>
                <div className="GamePurchasePlatforms">
                    {
                        game.purchases.map(purchaseItem => {
                            let itemLogo;
                            switch(purchaseItem.purchaseLogo){
                                case "steam_logo":
                                    itemLogo = SteamLogo;
                                    break;
                                case "origin_logo":
                                    itemLogo = OriginLogo;
                                    break;
                                case "playstation_store_logo":
                                    itemLogo = PsStoreLogo;
                                    break;
                                case "battle_net_logo":
                                    itemLogo = BattleNetLogo;
                                    break;
                                case "epic_games_store_logo":
                                    itemLogo = EpicGamesStoreLogo;
                                    break;
                                case "microsoft_store_logo":
                                    itemLogo = MicrosoftStoreLogo;
                                    break;    
                                default:
                                    break;
                            }

                            return (
                                <div className="GamePurchasePlatform">
                                    <img src={itemLogo} id="GamePurchasePlatformLogo"/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default InfoPanel;