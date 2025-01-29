import React, { useContext, useState, useEffect, useActionState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

import placeholder from "../../img/infoplaceholderimg.png"

const VehicleInfo = () => {
    const { actions } = useContext(Context);

    const { uid } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        const fetchVehicle = async () => {
            try {
                const data = await actions.getSingleVehicle(uid);
                setVehicle(data);
            } catch (error) {
                console.log("Error fetching vehicle:", error);
            }
        }
        fetchVehicle();
    }, [uid])

    if (!vehicle) {
        return <p>Loading...</p>
    }

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-6">
                    <img className="img img-fluid " src={placeholder} alt="" />
                </div>
                <div className="col-6">
                    <h1 className="text text-center">{vehicle.properties.name}</h1>
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
                        <h6>Model</h6>
                        <p>{vehicle.properties.model}</p>
                    </div>

                    <div className="col-2">
                        <h6>Vehicle Class</h6>
                        <p>{vehicle.properties.vehicle_class}</p>
                    </div>

                    <div className="col-2">
                        <h6>Cost</h6>
                        <p>{vehicle.properties.cost_in_credits}</p>
                    </div>

                    <div className="col-2">
                        <h6>Crew Capacity</h6>
                        <p>{vehicle.properties.crew}</p>
                    </div>

                    <div className="col-2">
                        <h6>Passengers Capacity</h6>
                        <p>{vehicle.properties.passengers}</p>
                    </div>

                    <div className="col-2">
                        <h6>Cargo Capacity</h6>
                        <p>{vehicle.properties.cargo_capacity}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default VehicleInfo;