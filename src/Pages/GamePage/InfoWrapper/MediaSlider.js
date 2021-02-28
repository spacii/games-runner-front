import React, {useContext, useState, useEffect} from "react";
import Slider from "react-slick";
import MediaSliderItem from "./MediaSliderItem.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./MediaSlider.css";

import MediaContext from "../MediaContext.js";

function MediaSlider() {
    var sliderSettings = {
        className: "MediaSlider",
        infinite: true,
        autoplay: true,
        draggable: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        speed: 2000
    };

    let vidCount = 0
    const {game} = useContext(MediaContext);
    const [videosArr, setVideosArr] = useState([]);
    const [imagesArr, setImagesArr] = useState([]);

    useEffect(() => {
        fetch(game._links.videos.href)
          .then(responseVid => responseVid.json())
          .then(videoRes => setVideosArr(videoRes._embedded.videos))
          .catch(error => console.log(error))
    
        fetch(game._links.screenshots.href)
          .then(responseIm => responseIm.json())
          .then(imageRes => setImagesArr(imageRes._embedded.images))
          .catch(error => console.log(error))
    }, [])

    return (
        <div className="GradientedMedia">
            <Slider {...sliderSettings}>
                {
                    // videosArr && (
                    //     videosArr.map(video =>{
                    //         return <MediaSliderItem srcUrl={video._links.resource.href} srcType="video" key={1}/>
                    //     })
                    // )
                }
                {
                    imagesArr && (
                        imagesArr.map(image =>{
                            return <MediaSliderItem srcUrl={"https://games-runner-media.s3.us-east-2.amazonaws.com/"+ image.imageType+"/"+image.imageName+"."+image.imageFormat} srcType="image" key={1}/> 
                        })
                    )
                }
            </Slider>
            <div className="BlackGradientLeftRight"></div>
            {/* <div className="BlackGradientBottomUp"></div> */}
        </div>
    );
}

export default MediaSlider;