import { RequestHandler } from "express"

const API_LINK='https://pokeapi.co/api/v2';

export const getPokemons:RequestHandler= async (req,res)=>{
    const {limit=20,offset=0} = req.query;
    const data =  await fetch(`${API_LINK}/pokemon?offset=${offset}&limit=${limit}`);
    const dataJson = await data.json();
    return res.json(dataJson);
}

export const getPokemonByIdOrName:RequestHandler= async (req,res)=>{
    const {id} = req.params;
    const data =  await fetch(`${API_LINK}/pokemon/${id}`);
    const dataJson = await data.json();
    return res.json(dataJson);
}

export const getPokemonsByType:RequestHandler= async (req,res)=>{
    const {id} = req.params;
    const data =  await fetch(`${API_LINK}/type/${id}`);
    const dataJson = await data.json();
    return res.json(dataJson);
}

