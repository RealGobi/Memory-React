import React from 'react';
import Button from './Button';
import Animation from './Animation';

export default function MainMenu(props) {
    const btnPlay = "Spela"
    const btnRules = "Regler"

    return (
        <div>
            <span onClick={props.playGame}>
                <Button btn={ btnPlay } />
            </span>
            <span onClick={props.seeRules}>
                <Button btn={ btnRules }/>
            </span>
            <Animation />
        </div>
    )
}
