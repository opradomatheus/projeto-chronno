/* 

Quando clicarmos no Pokémon desejado ira mostrar o card do mesmo e esconder o anterior.


Vamos trabalhar com dois elementos 
1 - Cartão 
2 - Listagem 


Precisaremos criar duas variavéis no JS para trabalhar com os elementos da tela.

Vamos utilizar o evento de clique feito de usuário  na listagem dos pokémon

- Remover a classe aberto do card que estiver aberto
- Ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual o cartão mostrar.
- Remover a classe ativa que marca o pokémon selecionado.

*/

//Variáveis que iremos utilizar para alterar os elementos da página.

const listaSelecaoPokemons = 
document.querySelectorAll('.pokemon')

const pokemonsCard = 
document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{
        //Remover a classe "aberto" só do cartão que está aberto.

        const cartaoPokemonAberto = document.querySelector('.aberto')

        cartaoPokemonAberto.classList.remove('aberto')

        //Ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar.

        const idPokemonSelecionado = 
        pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = 
        document.getElementById(idDoCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')


        //Remover classe ativo que marca o pokémon selecionado

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        
        pokemonAtivoNaListagem.classList.remove('ativo')
        

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)

        pokemonSelecionadoNaListagem.classList.add('ativo')


    })
})