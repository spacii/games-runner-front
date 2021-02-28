import React, {useContext, useEffect, useState} from "react";

import Person from "./Person.js";

import MediaContext from "../MediaContext.js";

function Persons() {
    const personsStyle = {
        marginBottom: "32px"
    }

    const personsCategory = {
        marginBottom: "32px"
    }

    var aStyle = {
            textDecoration: "none",
            color: "#1f1f1f",
            fontSize: "20px",
            fontFamily: "Georgia, serif",
            fontWeight: "bold"
    }

    var personsCounterAStyle = {
        textDecoration: "none",
        color: "red",
        fontSize: "18px",
        fontFamily: "Georgia, serif",
    }

    const {game, match} = useContext(MediaContext);
    const [personArr, setPersonArr] = useState([]);

    useEffect(() => {
        fetch(game._links.persons.href)
            .then(responsePer => responsePer.json())
            .then(personRes => setPersonArr(personRes._embedded.persons))
            .catch(error => console.log(error))

    }, [])

    return (
        <div className="Persons" style={personsStyle}>
            <div className="PersonsCategory" style={personsCategory}>
                <a style={aStyle} href={"/game/"+match.params.id+"/cast"}>Production cast</a>
            </div>
            <div className="PersonList">
                {
                    personArr && (
                        personArr.slice(0, 10).map(person =>{
                            return <Person personId={person.personId} personName={person.personName}/> 
                        })
                    )
                }
            </div>
            <div className="PersonsCounter">
                <a style={personsCounterAStyle} href={"/game/"+match.params.id+"/cast"}>{personArr.length} persons</a>
            </div>
        </div>
    );
}

export default Persons;