import "./RandomPokemon.css";
export default function RandomPokemon() {
  const randomNumber = Math.floor(Math.random() * 493) + 1;
  const url = `https://projectpokemon.org/images/sprites-models/bdsp-sprites/${randomNumber}.png`;

  return (
    <div className="RandomPokemon">
      <h1>Pokemon #{randomNumber} </h1>
      <img src={url} alt="" />
    </div>
  );
}