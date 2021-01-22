import React from 'react'

const Tarjeta = ({pokemon}) => {
    return (
        <div className="card border-primary mb-3-mx-auto" style={{"maxWidth" : "20rem"}} key={pokemon.id}>
        <div className="card-header"><b>{pokemon.name}</b></div>
        <div className="card-body">          
          <h6 className="card-subtitle mb-2 text-muted">Id: {pokemon.id}</h6>  
          <h6 className="card-subtitle mb-2 text-muted">Height: {pokemon.height}</h6>  
          <h6 className="card-subtitle mb-2 text-muted">Weight: {pokemon.weight}</h6>  
          <img src={pokemon.sprites['front_default']} />
          <img src={pokemon.sprites['back_default']} />                       
        </div>
      </div>
    )
};

export default Tarjeta