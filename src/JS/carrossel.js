
let idx = 0;

 window.onload = function() {

  const imgs = document.getElementById("img");
  const img2 = document.querySelectorAll("#img img");

  idx++;

  if (idx > img2.length - 1) {
    idx = 0;
  }

// esse vw é o tamanho q vai pular pro lado

  imgs.style.transform = `translatex(${-idx * 70}vw)`;

}

// esse 3000 é o tempo em segundos que a img vai ficar na tela

setInterval(window.onload,3000);


