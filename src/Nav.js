import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={`/dogs`}>Home</Link>
                </li>
                {dogs.map((name) => (
                    <li key={name}>
                        <Link to={`/dogs/${name.toLowerCase()}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
