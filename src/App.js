import PokemonCard from './components/PokemonCard';

import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0.25turn, #e6e6e6, #eee4ae);
  display: flex;
	flex-direction: column;
	font-family: 'Lato';
	margin: 0;
  `;

const Title = styled.h1`
   text-align:center;
   font-weight: 600;
  `;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
  `;
  

function App() {

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=60");
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState([]);
  
  //get pokemon list 
  const pokemonFunction = async() => {
    setLoading(true);
    const response = await axios.get(url);
    getPokemon(response.data.results)
    setLoading(false);
  }
  
  //get a pokemon in list 
  const getPokemon = async(res) => {
    res.map(async(item) => {
      const result = await axios.get(item.url)
      setPokemonData(state => {
        state = [...state,result.data]
        state.sort((a,b) => a.id > b.id ? 1 : -1)
        return state;
      })
    })
  }

  useEffect(() => {
   pokemonFunction();
  }, [url]);
   

  return (
    <Background>
      <Title>Pokedex</Title>
       <Container>
        <PokemonCard pokemon={pokemonData} loading={loading}/>
       </Container>
    </Background>
  );
}

export default App;