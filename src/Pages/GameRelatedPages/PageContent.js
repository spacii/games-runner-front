import React, { useEffect, useState } from "react";
import ImageItem from "./ImageItem.js";
import VideoItem from "./VideoItem.js"

function PageContent({contentOf, contentUrl}){
    const pageContentStyle = {
        width: "1920px",
        marginBottom: "50px",
        minHeight: "300px"
    }

    const pageContentInnerStyle = {
        width: "1600px",
        marginLeft: "160px",
        marginRight: "160px"
    }

    const [contentItems, setContentItems] = useState();

    useEffect(() => {
        switch (contentOf) {
            case "Images":
                fetch(contentUrl)
                    .then(imageResponce => imageResponce.json())
                    .then(imageResult => setContentItems(imageResult._embedded.images))
                    .catch(error => console.log(error));
                break;
            case "Videos":
                fetch(contentUrl)
                    .then(videoResponce => videoResponce.json())
                    .then(videoResult => setContentItems(videoResult._embedded.videos))
                    .catch(error => console.log(error));
                break;
            default:
                break;
        }
    })

    return (
        <div className="PageContent" style={pageContentStyle}>
            <div className="PageContentInner" style={pageContentInnerStyle}>
                {
                    contentItems && (
                        contentItems.map(item => {
                            if(contentOf === "Images")
                                //return <ImageItem imageSrc={item._links.resource.href}/>
                                return <ImageItem imageSrc={"https://games-runner-media.s3.us-east-2.amazonaws.com/"+ item.imageType+"/"+item.imageName+"."+item.imageFormat}/>
                            else if(contentOf === "Videos")
                                return <VideoItem videoSrc={item._links.resource.href}/>
                        })
                    )
                }
            </div>
        </div>
    );
}

export default PageContent;