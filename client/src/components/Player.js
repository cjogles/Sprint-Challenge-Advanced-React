import React from 'react';

const Player = (props) => {
    return (
        <div>
            <h1>{props.playerdata.name}</h1>
            <p>{props.playerdata.country}</p>
        </div>
    )
}
// country: "United States"
// id: 100
// name: "Tierna Davidson"
// searches: 1
export default Player;