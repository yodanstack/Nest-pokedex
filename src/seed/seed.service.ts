import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import axios, { AxiosInstance } from 'axios';

import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {

  private readonly axios:AxiosInstance = axios;

  constructor(    
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ){}

  async executeSeed() {

    this.pokemonModel.deleteMany({}); //delete * form pokemons

    const {data} = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    
    const pokemonToInsert: {name: string, no: number}[] = [];



    data.results.forEach( async({ name, url }) => {
    
      const segments = url.split('/');
      const no: number = +segments[ segments.length -2 ];

      // const pokemon = await 
      pokemonToInsert.push({ name, no })
    })
    // const newArray = await Promise.all(pokemonToInsert);
    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed execute';
  }

}
