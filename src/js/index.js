const botao = document.querySelector(".btn-plataforma");
const elemento = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
  elemento.classList.toggle("ativo");
});
