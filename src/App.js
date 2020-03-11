import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input } from "@rocketseat/unform";
import'./styles/index.css'; 

export default function App() {
  const [pokeName, setPokeName] = useState();
  const [pokeSprite, setPokeSprite] = useState();

  const handleSubmit = async (poke, { resetForm }) => {   
    const response = await axios.get(`
    https://pokeapi.co/api/v2/pokemon/${poke.pokemon}/     
    `);

    const name = response.data.name;
    const sprite = response.data.sprites.front_default;

    setPokeName(name);
    setPokeSprite(sprite);

    resetForm();
  }
    
  return (
    <div>
      <h1>Pokémon</h1>
      <Form onSubmit={handleSubmit}>
        <Input 
          name="pokemon"
          autoComplete="off"
        />
      </Form>
      {<p>{pokeName}</p>}
      {<img src={pokeSprite} alt=""/>}
    </div>
  );
}
