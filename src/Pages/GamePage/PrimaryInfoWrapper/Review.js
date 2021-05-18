import react, {useEffect, useState} from "react"

function Review({reviewText, score, userUrl}) {
    const [userLogin, setUserLogin] = useState("")
    useEffect(() => {
        fetch(userUrl)
            .then(userResponse => userResponse.json())
            .then(userResult => setUserLogin(userResult.userLogin))
            .catch(error => console.log(error))
    }, [])
    
    return (
        <div>
            {reviewText} {score} {userLogin}
        </div>
    )
}

export default Review