import React, {useContext, useEffect, useState} from "react";
import Slider from "react-slick";

import PrimarySliderItem from "./PrimarySliderItem.js";

import MediaContext from "../MediaContext.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./PrimarySlider.css";

function PrimarySlider() {
    var settings = {
        className: "PrimarySlider",
        infinite: false,
        draggable: false,
        arrows: true,
        dots: false,
        slidesToShow: 10,
        slidesToScroll: 1
    };

    const {game} = useContext(MediaContext);
    const [seqArr, setSeqArr] = useState([]);

    useEffect(() => {
        fetch(game._links.franchise.href)
            .then(seqResponse => seqResponse.json())
            .then(seqResult => setSeqArr(seqResult._embedded.games))
            .catch(error => console.log(error))
    }, [])

    return (
        <Slider {...settings}>
            {
                seqArr && (
                    seqArr.map(seqG => {
                            return <PrimarySliderItem seqGame={seqG} />
                    })
                )
            }
            {
                seqArr && (
                    seqArr.map(seqG => {
                            return <PrimarySliderItem seqGame={seqG} />
                    })
                )
            }
            {
                seqArr && (
                    seqArr.map(seqG => {
                            return <PrimarySliderItem seqGame={seqG} />
                    })
                )
            }
        </Slider>
    );
}

export default PrimarySlider;