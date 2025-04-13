import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const FavoritesDropDown = () => {
    const { store, actions } = useContext(Context);
    const [favourites, setFavourites] = useState(store.favourites);
    const navigate = useNavigate();

    useEffect(() => {
        setFavourites(store.favourites);
    }, [store.favourites]);

    return (
        <div className="btn-group">
            <button
                type="button"
                className="btn btn-primary dropdown-toggle d-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
            >
                <p className="text my-auto">Favorites</p>
                <div className="mx-2 bg-secondary flex-grow-1 d-flex justify-content-center align-items-center rounded">
                    <p className="my-auto">{favourites.length}</p>
                </div>
            </button>

            <ul className="dropdown-menu dropdown-menu-lg-end">
                {favourites.length > 0 ? (
                    favourites.map((item, index) => (
                        <li key={index} className="d-flex align-items-center justify-content-between px-2">
                            {/* Enlace al favorito */}
                            <span
                                onClick={(event) => {
                                    event.stopPropagation(); // Evita que el evento se propague al dropdown
                                    navigate(`/${item.category}/${item.uid}`);
                                }}
                                className="dropdown-item flex-grow-1 text-truncate"
                                style={{ cursor: "pointer" }}
                            >
                                {item.properties.name}
                            </span>

                            {/* Botón para eliminar */}
                            <button
                                className="btn btn-danger btn-sm ms-2"
                                onClick={() => actions.toggleFavourite(item, item.category)}
                            >
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="dropdown-item text-center text-muted">No favorites yet</li>
                )}
            </ul>
        </div>
    );
};

export default FavoritesDropDown;