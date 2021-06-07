import React from "react"

const SignUp = () => {
    return(
        <div>
            <input type="text" size="40" id="login"/>
            <input type="text" size="40" id="password"/>
            <input type="text" size="40" id = "email"/>
            <button onClick={() => signUpF()}>Зарегестрироваться</button>
        </div>
    )
}

const SignIn = () => {
    return(
        <div>
            <input type="text" size="40" id="login"/>
            <input type="text" size="40" id="password"/>
            <button onClick={() => signInF()}>Авторизоваться</button>
        </div>
    )
}

function PassportPage() {
    return (
        <SignIn />
    )
}

function signUpF() {
    const data = {
        userLogin: document.getElementById("login").value,
        userPassword: document.getElementById("password").value,
        userEmail: document.getElementById("email").value
    }

    fetch("http://localhost:8080/api/users", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      })
        .then(userResponce => userResponce.json())
        .then(userResult => console.log(userResult))
        .catch(error => console.log(error))

}

function signInF() {
    const login = document.getElementById("login").value
    const password = document.getElementById("password").value

    const data = {
        userLogin: login,
        userPassword: password,
    }

    fetch("http://localhost:8080/api/users/"+login+"/"+password)
        .then(userResponce => userResponce.json())
        .then(userResult => console.log(userResult))
        .catch(error => console.log(error))

}

export default PassportPage