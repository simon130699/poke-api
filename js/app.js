console.log("proyecto poke api");

const NumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log();

document.addEventListener("DOMContentLoaded", () => {
  const random = NumeroAleatorio(1, 151);
  fetchData(random);
});

const fetchData = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    const pokemon = {
      img: data.sprites.front_default,
      nombre: data.name,
      hp: data.stats[0].base_stat,
      exp: data.base_experience,
      ataque: data.stats[1].base_stat,
      especial: data.stats[3].base_stat,
      defensa: data.stats[2].base_stat

    };
    pintarCard(pokemon);
  } catch (err) {
    //es la respuesta si hay error el catch
    console.log(err);
  }
};

const pintarCard = (pokemon) => {
  console.log(pokemon);

  const flex = document.querySelector(".flex");
  const template = document.getElementById("template-card").content;
  const clone = template.cloneNode(true); //lo unico que hace es clonarlo
  const fragment = document.createDocumentFragment();

  clone.querySelector(".card-body-img").setAttribute("src", pokemon.img);
  clone.querySelector(".card-body-title").innerHTML = `${pokemon.nombre}
    <span>${pokemon.hp} hp</span>`;
  clone.querySelector(".card-body-text").textContent = `${pokemon.exp} EXP`;
  clone.querySelectorAll('.card-footer-social h3')[0].textContent =`${pokemon.ataque} K`
  clone.querySelectorAll('.card-footer-social h3')[1].textContent = `${pokemon.especial} K`
  clone.querySelectorAll('.card-footer-social h3')[2].textContent = `${pokemon.defensa} K`
  

  fragment.appendChild(clone);
  flex.appendChild(fragment);
};

const searchPokemon = (e) => {
  
}
