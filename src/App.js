import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input } from "@rocketseat/unform";
import'./index.css'; 

export default function App() {
  const [pokeName, setPokeName] = useState();
  const [pokeSprite, setPokeSprite] = useState();

  const handleSubmit = async (poke, { resetForm }) => {  
    let low = poke.pokemon.toLowerCase();
    
    const response = await axios.get(`
    https://pokeapi.co/api/v2/pokemon/${low}/     
    `);

    console.log(low)

    const name = response.data.name;
    const sprite = response.data.sprites.front_default;

    setPokeName(name);
    setPokeSprite(sprite);

    resetForm();
  }
    
  return (
    <div>
      <h1>Pokémon</h1>

      

      <div className="poke">
        <Form onSubmit={handleSubmit}>
          <Input 
            name="pokemon"
            autoComplete="off"
          />
          <button 
            type="submit" 
            onSubmit={handleSubmit}>
              Temos que Pegar!
          </button>
        </Form>

        {<p>{pokeName}</p>}
        {<img src={pokeSprite} alt=""/>}
      </div>    
    </div>
  );
}
