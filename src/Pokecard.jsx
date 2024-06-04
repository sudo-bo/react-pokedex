import React from 'react'

const Pokecard = ({ id=4, name='Charmander', type='fire', base_experience=62, style}) => {
    return (
        <div style={style}> 
            <h1>Name: {name}</h1>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
            <img width="200px" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
            alt={`${name}'s pokmeon picture`}
            />
        </div>
    );
};

export default Pokecard