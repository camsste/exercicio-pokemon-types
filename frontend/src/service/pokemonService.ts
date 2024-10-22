export const pokemonService = {
  // Função para buscar um Pokémon pelo nome
  getPokemonByName: async (name: string) => {
    try {
      const response = await fetch(`http://localhost:8080/pokemon/${name}`);

      if (!response.ok) {
        throw new Error('Pokémon não encontrado');
      }

      const pokemon = await response.json();
      return pokemon;
    } catch (error) {
      console.error('Erro ao buscar Pokémon:', error);
      throw error;
    }
  },

  // Função para buscar todos os Pokémon
  getAllPokemons: async () => {
    try {
      const response = await fetch('http://localhost:8080/pokemon'); // Atualize para a URL correta

      if (!response.ok) {
        throw new Error('Não foi possível buscar os Pokémon');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar todos os Pokémon:', error);
      throw error;
    }
  },
};
