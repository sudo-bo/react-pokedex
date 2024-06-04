import React, {useState} from 'react'
import Pokecard from './Pokecard';



const Pokedex = () => {
    return (
        <>
            <Pokecard id={4} name='Charmander' type='fire' base_experience={62} style={{border: '2.5px solid magenta', "border-radius": '10px', padding: '20px', "margin-bottom": '5px'}}/>
            <Pokecard id={7} name='Squirtle' type='water' base_experience={63} style={{border: '2.5px solid magenta', "border-radius": '10px', padding: '20px', "margin-bottom": '5px'}}/>
            <Pokecard id={11} name='Metapod' type='bug' base_experience={72} style={{border: '2.5px solid magenta', "border-radius": '10px', padding: '20px', "margin-bottom": '5px'}}/>
        </>
    )

};

export default Pokedex