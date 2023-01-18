var src;

function buscarGif() {
  let palabra = document.getElementById("palabraBusqueda").value;
  let requestURL = "https://api.giphy.com/v1/gifs/search?api_key=JkOD5d9VA4JbiFfj1WvYFdl6Vh5kPUum";

  requestURL = requestURL.concat("&q=", palabra, "&limit=25");
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      let num = Math.floor(Math.random() * 15);
      src = data.data[num].images.original.url;
      document.getElementById("resultGif").src = src;
    })
    .catch((error) => console.log(error));
}

function randomGif() {
  let requestURL = "https://api.giphy.com/v1/gifs/random?api_key=JkOD5d9VA4JbiFfj1WvYFdl6Vh5kPUum&tag=&rating=g";
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      src = data.data.images.original.url;
      document.getElementById("resultGif").src = src;
    })
    .catch((error) => console.log(error));
}