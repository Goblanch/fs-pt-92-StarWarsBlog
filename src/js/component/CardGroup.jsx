import React, { Children, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import InfoCard from "./PersonCard.jsx";

const CardGroup = ({ children, title }) => {


    return (
        <div className="mb-3">
            <h2 className="text text-danger">{title}</h2>
            <div className="d-flex overflow-auto space-x-4 p-4">
                {React.Children.map(children, (child, key) => (
                    <div className="flex-shrink-0 w-64 me-4" key={key}>{child}</div>
                ))}
            </div>
        </div>
    )

}

export default CardGroup;