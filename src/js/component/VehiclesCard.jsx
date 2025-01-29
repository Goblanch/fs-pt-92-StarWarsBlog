import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const VehiclesCard = ({ uid }) => {
    const { actions } = useContext(Context);
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        const fetchVehicle = async () => {
            try {
                const data = await actions.getSingleVehicle(uid);
                setVehicle(data);
            } catch (error) {
                console.log("Error fetching vehicles:", error);
            }
        }

        fetchVehicle();
    }, [uid]);

    if (!vehicle) {
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
                <h5 className="card-title">{vehicle.properties.name}</h5>
                <p className="card-text">Model: {vehicle.properties.model}</p>
                <p className="card-text">Class: {vehicle.properties.vehicle_class}</p>
                <p className="card-text">Cost: {vehicle.properties.cost_in_credits}</p>
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

export default VehiclesCard;