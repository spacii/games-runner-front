import React, { useEffect, useState } from "react";

function PrimarySliderItem({seqGame}) {
    var style = {
        width: "140px",
        height: "210px",
        borderRadius: "8px",
        marginBottom: "2px"
    }

    var stylePoster = {
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

    const [seqGamePoster, setSeqGamePoster] = useState();

    useEffect(() => {
        fetch(seqGame._links.poster.href)
            .then(seqGamePosterResponse => seqGamePosterResponse.json())
            .then(seqGamePosterResult => setSeqGamePoster("https://games-runner-media.s3.us-east-2.amazonaws.com/"+ seqGamePosterResult.imageType+"/"+seqGamePosterResult.imageName+"."+seqGamePosterResult.imageFormat))
    }, [])

    return(
        <a href={"/game/" + seqGame.gameId} style={aStyle}>
            <div style={{width: "140px", height: "250px", overflow: "hidden"}}>
                <div style={style}>
                    <img src={seqGamePoster} style={stylePoster}/>
                </div>
                <a href={"/game/" + seqGame.gameId} style={aStyle}>{seqGame.gameName}</a>
            </div>
        </a>
    );
}

export default PrimarySliderItem;