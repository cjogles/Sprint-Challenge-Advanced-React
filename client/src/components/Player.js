import React from 'react';

const Player = (props) => {

    return (

        <div>
            <h1>{props.playerdata.name}</h1>
            <p>{props.playerdata.country}</p>
        </div>
        
    )

}

export default Player;