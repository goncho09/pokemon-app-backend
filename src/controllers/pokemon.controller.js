const API_LINK='https://pokeapi.co/api/v2';

export const getPokemons= async (req,res)=>{
    const {limit=20,offset=0} = req.query;
    const data =  await fetch(`${API_LINK}/pokemon?offset=${offset}&limit=${limit}`);
    const dataJson = await data.json();
    return res.json(dataJson);
}

export const getPokemonByIdOrName= async (req,res)=>{
    try {
        const {id} = req.params;
        const data =  await fetch(`${API_LINK}/pokemon/${id}`);
        const dataJson = await data.json();
        return res.status(200).json(dataJson);
    } catch (error) {
        return res.status(404).json({
            status:404,
            error:"Este pokemon no existe."
        });
    }
};

export const getPokemonsByType= async (req,res)=>{
    const {id} = req.params;
    const data =  await fetch(`${API_LINK}/type/${id}`);
    const dataJson = await data.json();
    return res.json(dataJson);
}

