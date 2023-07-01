import React from "react";

const getScoresSorted = (scores, isSortedDesc) => scores.sort((a, b) => isSortedDesc ? b.s - a.s : a.s - b.s);


function Card({ country, isSortedDesc }) {

    const scoresSorted = getScoresSorted(country.scores, isSortedDesc);

    return (
        <div className="card">
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
        </div>
    );
}

export default Card;