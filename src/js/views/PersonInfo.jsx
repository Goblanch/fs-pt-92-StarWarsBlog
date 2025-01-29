import React, { useContext, useState, useEffect, useActionState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

import placeholder from "../../img/infoplaceholderimg.png"

const PersonInfo = () => {

    const { actions } = useContext(Context);

    const { uid } = useParams();
    const [person, setPerson] = useState();

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const data = await actions.getSinglePeople(uid);
                setPerson(data);
            } catch (error) {
                console.log("Error fetching person:", error);
            }
        }
        fetchPerson();
    }, [uid])

    if (!person) {
        return <p>Loading...</p>
    }

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-6">
                    <img className="img img-fluid " src={placeholder} alt="" />
                </div>
                <div className="col-6">
                    <h1 className="text text-center">{person.properties.name}</h1>
                    <p className="text text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
            <div className="border-top border-danger">
                <div className="row mt-3">

                    <div className="col-2">
                        <h6>Name</h6>
                        <p>{person.properties.name}</p>
                    </div>

                    <div className="col-2">
                        <h6>Birth Year</h6>
                        <p>{person.properties.birth_year}</p>
                    </div>

                    <div className="col-2">
                        <h6>Gender</h6>
                        <p>{person.properties.gender}</p>
                    </div>

                    <div className="col-2">
                        <h6>Height</h6>
                        <p>{person.properties.height}</p>
                    </div>

                    <div className="col-2">
                        <h6>Skin Color</h6>
                        <p>{person.properties.skin_color}</p>
                    </div>

                    <div className="col-2">
                        <h6>Eye Color</h6>
                        <p>{person.properties.eye_color}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PersonInfo;