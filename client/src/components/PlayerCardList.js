import React from 'react';
import Player from './Player';

const PlayerCardList = (props) => {
    return (
        <div>
            {props.data.map(player => (
                <Player playerdata={player} key={player.id} />
            ))}
        </div>
    )
}

export default PlayerCardList;