import React, { useMemo } from "react";

function Card({ country }) {
    const scoresSorted = useMemo(() => country.scores.sort((a, b) => b.s - a.s), [country.scores]);
    return (
        <div className="card-container">
            <h3 className="card-title">High scores: {country.name}</h3>
            <ul className="card-list">
                {scoresSorted.map((team) => {
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