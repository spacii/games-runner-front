import React, {useState, useEffect} from "react";

function PageTitle({gameTitleUrl, gameName, gameScreenshotsUrl, categoryName}){
    const gameTitleStyle = {
        width: "1920px",
        background: "black",
        display: "flex",
        marginBottom: "50px"
    }

    const gameTitleImageStyle = {
        width: "640px",
        display: "inline-block",
    }

    const titleWrapperStyle = {
        width: "720px",
        marginTop: "64px",
        marginBottom: "64px",
        marginLeft: "160px"
    }

    const gameTitleSliderStyle = {
        width: "1280px",
        position: "relative",
        display: "inline-block"
    }

    const [gameTitle, setGameTitle] = useState();
    //const [screenshotsArray, setScreenshotsArray] = useState([]);

    useEffect(() => {
        fetch(gameTitleUrl)
            .then(titleResponse => titleResponse.json())
            .then(titleResult => setGameTitle(titleResult._links.resource.href))
            .catch(error => console.log(error));

        // fetch(gameScreenshotsUrl)
        //     .then(screenshotsResponse => screenshotsResponse.json())
        //     .then(screenshotsResult => setScreenshotsArray(screenshotsResult._embedded.images))
        //     .catch(error => console.log(error));
    }, [])

    return (
        <div className="PageTitle" style={gameTitleStyle}>
            <div className="GameTitleBlackPart" style={gameTitleImageStyle}>
                <div className="TitleWrapper" style={titleWrapperStyle}>
                    {
                        gameTitle ? (
                            <img src={gameTitle} style={{maxWidth: "100%", maxHeight: "100%"}}/>
                        ) : (
                            <h1 style={{color: "white"}}>{gameName}</h1>
                        )
                    }
                </div>
            </div>
            <div className="GameTitleSlider" style={gameTitleSliderStyle}>
                <h1 style={{margin: "0", fontSize: "64px", color: "white", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>{categoryName}</h1>
            </div>
        </div>
    );
}

export default PageTitle;