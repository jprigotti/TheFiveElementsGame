import React, { useState } from 'react'
import './ElementsGame.css'

const ElementsGame = () => {

    // useState definition
    const [result, setResult] = useState();
    const [playerChoice, setPlayerChoice] = useState();
    const [machineChoice, setMachineChoice] = useState();
    const [resultCount, setResultCount] = useState(0);

    // general const definition
    const SELECTIONS = {
        MADERA: "MADERA",
        FUEGO: "FUEGO",
        TIERRA: "TIERRA",
        METAL: "METAL",
        AGUA: "AGUA"
    };

    const RESULTS = {
        WIN: "GANASTE",
        LOST: "PERDISTE",
        EVEN: "EMPATE",
    }


    const PLAY_RESULTS = [
        {
            name: SELECTIONS.MADERA,
            [SELECTIONS.MADERA]: RESULTS.EVEN,
            [SELECTIONS.FUEGO]: RESULTS.LOST,
            [SELECTIONS.TIERRA]: RESULTS.WIN,
            [SELECTIONS.METAL]: RESULTS.LOST,
            [SELECTIONS.AGUA]: RESULTS.WIN,
        },
        {
            name: SELECTIONS.FUEGO,
            [SELECTIONS.MADERA]: RESULTS.WIN,
            [SELECTIONS.FUEGO]: RESULTS.EVEN,
            [SELECTIONS.TIERRA]: RESULTS.LOST,
            [SELECTIONS.METAL]: RESULTS.WIN,
            [SELECTIONS.AGUA]: RESULTS.LOST,
        },
        {
            name: SELECTIONS.TIERRA,
            [SELECTIONS.MADERA]: RESULTS.LOST,
            [SELECTIONS.FUEGO]: RESULTS.WIN,
            [SELECTIONS.TIERRA]: RESULTS.EVEN,
            [SELECTIONS.METAL]: RESULTS.LOST,
            [SELECTIONS.AGUA]: RESULTS.WIN,
        },
        {
            name: SELECTIONS.METAL,
            [SELECTIONS.MADERA]: RESULTS.WIN,
            [SELECTIONS.FUEGO]: RESULTS.LOST,
            [SELECTIONS.TIERRA]: RESULTS.WIN,
            [SELECTIONS.METAL]: RESULTS.EVEN,
            [SELECTIONS.AGUA]: RESULTS.LOST,
        },
        {
            name: SELECTIONS.AGUA,
            [SELECTIONS.MADERA]: RESULTS.LOST,
            [SELECTIONS.FUEGO]: RESULTS.WIN,
            [SELECTIONS.TIERRA]: RESULTS.LOST,
            [SELECTIONS.METAL]: RESULTS.WIN,
            [SELECTIONS.AGUA]: RESULTS.EVEN,
        },

    ]

    // function definition
    const showPlayerChoice = (choice) => {
        console.log(choice);
    }

    const getRandomElementFromArray = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    const getSelectionIA = () => {
        const selections = Object.values(SELECTIONS);
        return getRandomElementFromArray(selections);
    };

    const play = (playerChoice) => {
        const machineChoice = getSelectionIA();
        setPlayerChoice(playerChoice);
        setMachineChoice(machineChoice);
        const checkGame = PLAY_RESULTS.filter((player) => player.name == playerChoice);
        setResult(checkGame[0][machineChoice]);
        // console.log("Check Game: ", checkGame[0][machineChoice]);

        if (checkGame[0][machineChoice] == RESULTS.WIN) {
            setResultCount(resultCount + 1);
        } else if (checkGame[0][machineChoice] == RESULTS.LOST) {
            setResultCount(resultCount - 1);
        }
    }

    return (
        <div className="main-container">
            <div className="container">
                {/* Header */}
                <div className="header">
                    <h1 >The 5 Elements Game</h1>
                </div>


                {/* Player and Machine choice */}
                <div className="choice-inner-container">
                    <div className="player-choice-container">
                        <h3>Player choice:</h3>
                        <h3>{playerChoice}</h3>
                    </div>
                    <div className="player-choice-container">
                        <h3>Machine choice:</h3>
                        <h3>{machineChoice}</h3>
                    </div>
                </div>


                {/* Results */}
                <div className="result-inner-container">
                    <h2>{result}</h2>
                </div>

                {/* Buttons */}
                <div className="buttons-inner-container">
                    <button onClick={() => { play(SELECTIONS.MADERA) }}>Madera</button>
                    <button onClick={() => { play(SELECTIONS.FUEGO) }}>Fuego</button>
                    <button onClick={() => { play(SELECTIONS.TIERRA) }}>Tierra</button>
                    <button onClick={() => { play(SELECTIONS.METAL) }}>Metal</button>
                    <button onClick={() => { play(SELECTIONS.AGUA) }}>Agua</button>
                </div>

                {/* Results */}
                <div className="result-inner-container">
                    <h2>Your Score: {resultCount}</h2>
                </div>

            </div>

        </div>
    )
}

export default ElementsGame
