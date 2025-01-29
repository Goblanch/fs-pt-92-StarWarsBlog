import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import CardGroup from "../component/CardGroup.jsx";
import PersonCard from "../component/PersonCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import VehiclesCard from "../component/VehiclesCard.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.getAllStarWarsPeople();
	// 	actions.getAllStarWarsPlanets();
	// }, [])

	return (
		<div className="container">
			<CardGroup title="Characters">
				{store.people.map((person) => (
					<PersonCard key={person.uid} uid={person.uid} />
				))}
			</CardGroup>

			<CardGroup title="Planets">
				{store.planets.map((planet) => (
					<PlanetCard key={planet.uid} uid={planet.uid} />
				))}
			</CardGroup>

			<CardGroup title="Vehicles">
				{store.vehicles.map((vehicle) => (
					<VehiclesCard key={vehicle.uid} uid={vehicle.uid} />
				))}
			</CardGroup>
		</div>
	);
};