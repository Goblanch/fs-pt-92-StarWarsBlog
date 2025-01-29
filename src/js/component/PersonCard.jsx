import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router";

const InfoCard = ({ uid }) => {

    const { actions } = useContext(Context);
    const [person, setPerson] = useState(null);

    const navigate = useNavigate();

    const showInfo = () => {
        navigate(`/people/${uid}`);
    }

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const data = await actions.getSinglePeople(uid);
                setPerson(data);
            } catch (error) {
                console.log("Error fetching person:", error);
            }
        };

        fetchPerson();
    }, [uid, actions])

    if (!person) {
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
                <h5 className="card-title">{person.properties.name}</h5>
                <p className="card-text">Gender: {person.properties.gender}</p>
                <p className="card-text">Hair color: {person.properties.hair_color}</p>
                <p className="card-text">Eye Color: {person.properties.eye_color}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary" onClick={showInfo}>
                        Learn More!
                    </button>
                    <button className="btn btn-outline-warning">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;