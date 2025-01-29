import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const PlanetCard = ({ uid }) => {
    const { actions } = useContext(Context);
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
        return <div className="card" style={{ width: "18rem" }}>Loading...</div>;
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCRwATJ2_xTtqna6YE3Ey9vqxMWxbg0-mCA&s"
                alt="Placeholder"
            />
            <div className="card-body">
                <h5 className="card-title">{planet.properties.name}</h5>
                <p className="card-text">Diameter: {planet.properties.diameter}</p>
                <p className="card-text">Population: {planet.properties.population}</p>
                <p className="card-text">Climate: {planet.properties.climate}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary">Learn More!</button>
                    <button className="btn btn-outline-warning">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard;