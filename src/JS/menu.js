window.onload = () => {

  let abrir = document.querySelector(".sidebar");
  let fechar = document.querySelector("#btn");


  fechar.addEventListener("click", () => {
    abrir.classList.toggle("open");
  });

}


export default window.onload;

