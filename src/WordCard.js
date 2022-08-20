import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const[state, setState] = useState(prepareStateFromWord(props.value))
    const Answer = () =>{alert(`Anwser is "${props.value}"`); }

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 

        let guess = state.guess + c
        setState({...state, guess})
        
        if(guess.length == state.word.length){
            if(guess == state.word){
                alert(`Congrats! You found the word`);
                console.log('yeah!')
                setState({...state, guess: '', completed: true})
                setState({...state, guess: '', attempt: state.attempt + 1})
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
                alert(`Game over! Come on You can do it!.`);
            }
        }
    }
    return (
        <div>
            { 
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                ) 
            }
            <p className='guess'>Round : <span>{state.attempt}</span></p>
        </div>
        
    );
}
   