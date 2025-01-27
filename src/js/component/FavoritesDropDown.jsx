import React from "react";

const FavoritesDropDown = () => {
    return (
        <div class="dropdown">
            <a class="btn btn-primary dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <p className="text my-auto">Favorites</p>
                <div className="mx-2 bg-secondary flex-grow-1">
                    <p className="my-auto">0</p>
                </div>
            </a>

            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    )

}

export default FavoritesDropDown;