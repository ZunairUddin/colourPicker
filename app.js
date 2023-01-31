const btn = document.querySelector("button");
const colourInp = document.querySelector("#colour");
const main = document.querySelector("#main");

const applyColour = () => {
  main.style.backgroundColor = `${colourInp.value}`;
};
btn.addEventListener("click", applyColour);
