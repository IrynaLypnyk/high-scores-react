import React from "react";
import { AllTeamsScores }  from "../scores.js";
import Card from "./Card";

function WorldWideTable({ isSortedDesc }) {
    const teamScoresData = { name: "WORLD WIDE", scores: AllTeamsScores };
    return (
        <Card country={teamScoresData} isSortedDesc={isSortedDesc}/>
    );
}

export default WorldWideTable;