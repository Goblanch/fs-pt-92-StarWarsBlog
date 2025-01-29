import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

import placeholder from "../../img/infoplaceholderimg.png";

const PlanetInfo = () => {
    const { actions } = useContext(Context);

    const { uid } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const data = await actions.getSinglePlanet(uid);
                setPlanet(data);
            } catch (error) {
                console.log("Error fetching planet:", error);
            }
        }
        fetchPlanet();
    }, [uid])

    if (!planet) {
        return <p>Loading...</p>
    }

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-6">
                    <img className="img img-fluid " src={placeholder} alt="" />
                </div>
                <div className="col-6">
                    <h1 className="text text-center">{planet.properties.name}</h1>
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
                        <p>{planet.properties.name}</p>
                    </div>

                    <div className="col-2">
                        <h6>Diameter</h6>
                        <p>{planet.properties.diameter}</p>
                    </div>

                    <div className="col-2">
                        <h6>Orbital Period</h6>
                        <p>{planet.properties.orbital_period}</p>
                    </div>

                    <div className="col-2">
                        <h6>Gravity</h6>
                        <p>{planet.properties.gravity}</p>
                    </div>

                    <div className="col-2">
                        <h6>Population</h6>
                        <p>{planet.properties.population}</p>
                    </div>

                    <div className="col-2">
                        <h6>Climate</h6>
                        <p>{planet.properties.climate}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PlanetInfo;