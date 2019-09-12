import React, { useState } from 'react';
import RulesOfTheGame from './RulesOfTheGame';
import MainMenu from './MainMenu';
import PlayGame from './PlayGame';



const Game = () => 
{
 const [play, setPlay] = useState(false)
 const [rules, setRules] = useState(false)

const playGame = () => {
    setPlay(!play)
    }

const seeRules = () => {
        setRules(!rules)
    }

        return (
            <div className="gameArea">
                {
                    rules ? <RulesOfTheGame /> : (play ? <PlayGame /> : <MainMenu seeRules={seeRules} playGame={playGame} />)
                }
            </div>
        )
}

export default Game;