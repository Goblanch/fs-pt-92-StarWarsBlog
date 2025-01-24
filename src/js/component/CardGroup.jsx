import React from "react";
import InfoCard from "./InfoCard.jsx";

const CardGroup = () => {

    const info = {
        name: "Persona",
        data: ["Estatura: 185", "Color de ojos: 200", "Pelo: azul"]
    }

    return (
        <InfoCard properties={info} />
    )
}

export default CardGroup;