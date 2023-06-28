import React from "react";

function Card({ country }) {
    return (
        <div className="card-container">
            <h3 className="card-title">High scores: {country.name}</h3>
            <ul className="card-list">
                {country.scores.map((team) => {
                    return (
                        <li className="card-item" key={team.n}>
                            <span className="card-half-item card-team-name">{team.n.toUpperCase()}</span>
                            <span className="card-half-item card-scores">{team.s}</span></li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Card;