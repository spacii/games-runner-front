import React, {useEffect, useState} from "react";

function PersonPage({match}){

    const [person, setPerson] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/api/persons/${match.params.id}`)
          .then(response => response.json())
          .then(perRes => setPerson(perRes))
          .catch(error => console.log(error));
    }, []);

    return (
        <div style={{color: "black"}}>
            {person.personName}
        </div>
    );
}

export default PersonPage;