import React from "react";

const InfoCard = ({ properties }) => {


    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCRwATJ2_xTtqna6YE3Ey9vqxMWxbg0-mCA&s" alt="Placeholder" />
            <div className="card-body">
                <h5 className="card-title">{properties.name}</h5>
                {properties.data.map((data) => (
                    <p className="card-text">{data}</p>
                ))}
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary">Learn More!</button>
                    <button className="btn btn-outline-warning">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default InfoCard;