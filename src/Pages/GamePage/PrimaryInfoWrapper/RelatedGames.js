import React, {useEffect, useState, useContext} from "react";
import Slider from "react-slick";
import MediaContext from "../MediaContext.js";
import PrimarySliderItem from "./PrimarySliderItem.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./RelatedGames.css";

function RelatedGames() {
    const {game, match} = useContext(MediaContext);
    const [seqAndPreq, setSeqAndPreq] = useState([]);
    const [dlcs, setDlcs] = useState([]);

    const relatedGamesStyle = {

    }

    const primarySlider = {
    
    }

    var settings = {
        className: "PrimarySliderInner",
        infinite: false,
        draggable: false,
        arrows: true,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        useCSS: false,
        useTransform: false
    };

    useEffect(() => {
        fetch(game._links.franchise.href)
            .then(seqResponse => seqResponse.json())
            .then(seqResult => setSeqAndPreq(seqResult._embedded.games))
            .catch(error => console.log(error))
    }, [])

    console.log("SEZE: " + seqAndPreq.length);

    return (
        seqAndPreq.length !== 0 && (
            <div className="RelatedGames" style={{marginBottom: "32px"}}>
                <h2 style={{fontWeight: "600", marginBottom: "24px"}}>
                    <a href={"/game/"+match.params.id+"/relations"} style={{textDecoration: "none", color: "#1f1f1f"}}>Related games</a>
                </h2>
                <div className="PrimarySlider" style={primarySlider}>
                    <Slider {...settings}>
                        {
                            seqAndPreq && (
                                seqAndPreq.map(seqG => {
                                            return <PrimarySliderItem seqGame={seqG} />
                                    })
                            )
                        }
                    </Slider>
                </div>
            </div>           
        )
    );
}

export default RelatedGames;