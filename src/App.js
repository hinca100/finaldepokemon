import React from 'react';
import {Component} from 'react';
import "./App.css"
import Tarjetas from './components/Tarjetas'


class App extends Component {        //constructor vacio
  constructor() {
    super();
    this.state = {
      pokemons : [],
      pokemonDetails : [],
    }    
  }

  componentDidMount() {             //cargad de los pokemon
    this.getMorePokemon();
  }

  getMorePokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=" //url
    fetch(url)                                              //buscador del url
    .then(response => response.json())                      //respuesta en jsond el url
    .then(data => {                                         //la data 
      if (data) {                                           //si hay data
        this.setState({pokemons : data.results}, () => {    // 
          this.state.pokemons.map(pokemon => {              //mapeando resultados 
            fetch(pokemon.url)                              //buscar pokemon por url
            .then(response => response.json())
            .then(data => {
              if (data) {
                const cambio = this.state.pokemonDetails
                cambio.push(data)                              //cambio de estado               
                this.setState({pokemonDetails: cambio})
              }            
            })
            .catch(console.log)
          })
        })        
      }
    })
    .catch(console.log)
  }

  render() {
    const {pokemonDetails} = this.state;

    const renderedPokemonList = pokemonDetails.map((pokemon,) => {   //mapear el indice y traer los datos  de pokemon
      return (<Tarjetas pokemon={pokemon} />);
    });

    return (
      <div className="container"> //contenedor 
        <div className="card-columns">  
          {renderedPokemonList}
        </div>
      </div>
    );
  }
}

export default App;