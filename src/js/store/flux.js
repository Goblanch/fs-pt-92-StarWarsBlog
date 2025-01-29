const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getAllStarWarsPeople: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people");

					if (!response.ok) throw new Error(response.statusText);

					const fetchData = await response.json();

					if (fetchData) setStore({ people: fetchData.results });

					console.log(getStore().people);

				} catch (error) {
					console.log(error);
				}
			},

			getSinglePeople: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);

					if (!response.ok) throw new Error(response.statusText);

					const fetchData = await response.json();

					return fetchData.result;

				} catch (error) {
					console.log(error);
				}
			},

			getAllStarWarsPlanets: async () => {
				try {

					const response = await fetch("https://www.swapi.tech/api/planets");

					if (!response.ok) throw new Error(response.statusText);

					const fetchData = await response.json();

					if (fetchData) setStore({ planets: fetchData.results });

					console.log(getStore().planets);

				} catch (error) {
					console.log(error);
				}
			},

			getSinglePlanet: async (uid) => {
				try {
					console.log(uid);
					const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);

					if (!response.ok) throw new Error(response.statusText);

					const fetchData = await response.json();

					return fetchData.result;

				} catch (error) {
					console.log(error);
				}
			},

			getAllStarWarsVehicles: async () => {
				try {

					const response = await fetch("https://www.swapi.tech/api/vehicles");

					if (!response.ok) throw new Error(response.statusText);

					const fetchData = await response.json();

					if (fetchData) setStore({ vehicles: fetchData.results });

					console.log(getStore().vehicles);

				} catch (error) {
					console.log(error);
				}
			},

			getSingleVehicle: async (uid) => {
				try {

					const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`)

					if (!response.ok) throw new Error(response.statusText);

					const fetchData = await response.json();

					return fetchData.result;

				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
