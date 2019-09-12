import React, { Component } from 'react';
import StatusBar from './StatusBar';
import json from '../assets/animal.json'

export default class PlayGame extends Component {
    render() {
    let playCards = json;

   let outPut = playCards.map(playCard => {
       return (
        <img className="back-face" src="../img/back_side.png" alt="Memory Card" key={playCard.id} />
       )
    });
        return (
            <div>
                <StatusBar />
                {outPut}
            </div>
        )
    }
}
