import react, {useEffect, useState} from "react"

function Review({reviewText, score, userUrl}) {
    const [userLogin, setUserLogin] = useState("")
    useEffect(() => {
        fetch(userUrl)
            .then(userResponse => userResponse.json())
            .then(userResult => setUserLogin(userResult.userLogin))
            .catch(error => console.log(error))
    }, [])

    const aStyle = {
        fontSize: "18px",
        fontWeight: "550",
        fontFamily: "Georgia, serif",
        color: "#393939",
        textDecoration: "none",
        marginRight: "12px"
    }

    const pStyle = {
        fontSize: "18px",
        fontFamily: "Georgia, serif",
        color: "#393939",
        lineHeight: "24px",
        margin: "0"
    }
    
    return (
        <div style={{marginBottom: "12px"}}>
            <div style={{marginBottom: "8px"}}>
                <a style={aStyle}>
                    {userLogin}
                </a>
                {score}
            </div>
            <div>
                <p style={pStyle}>{reviewText}</p>
            </div>
        </div>
    )
}

export default Review