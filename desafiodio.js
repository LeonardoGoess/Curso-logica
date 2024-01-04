// Definindo a função construtora para Pokémon 
function Pokemon(nome, nivel, vida, sexo) {
    this.nome = nome;
    this.nivel = nivel;
    this.vida = vida;
    this.sexo = sexo;
  }
  
  // Função para cadastrar um Pokémon
  function cadastrarPokemon(nome, nivel, vida, sexo) {
    return new Pokemon(nome, nivel, vida, sexo);
  }
  
  // Lista para armazenar os Pokémons
  var pokemons = [];
  
  var pokemon1 = cadastrarPokemon("POOCHYENA", 2, 13, "M");
  pokemons.push(pokemon1);
  
  var pokemon2 = cadastrarPokemon("ZIGZAGOON", 2, 13, "F");
  pokemons.push(pokemon2);
  
  var pokemon3 = cadastrarPokemon("DRAGONITE", 5, 25, "M");
  pokemons.push(pokemon3);
  
  var pokemon4 = cadastrarPokemon("DRAGONITE", 5, 24, "F");
  pokemons.push(pokemon4);

  var pokemon5 = cadastrarPokemon
  ("DRAGONITE", 5, 24, "F");
pokemons.push(pokemon5);

  var pokemon6 = cadastrarPokemon
  ("POOCHYENA", 3, 15, "F");
  pokemons.push(pokemon6);

  var pokemon7 = cadastrarPokemon
  ("WURMPLE", 2, 7, "M");
  pokemons.push(pokemon7);

  //Exibindo mensagens de saída
  pokemons.forEach(function(pokemon) {
    var { nome } = pokemon;
    console.log(nome + " cadastrado com sucesso.");
});