import React, { useMemo } from "react";

function Card({ country, isSortedDesc }) {
    const scoresSorted = useMemo(() => country.scores.sort((a, b) => isSortedDesc ? b.s - a.s : a.s - b.s), [country.scores, isSortedDesc]);
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