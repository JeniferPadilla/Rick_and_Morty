const API = "https://rickandmortyapi.com/api/character";

const getAPI = (api) => {
  //cuando se crea se recibe osea que getApi envia a la const de la funcion para hacer lo que tenga que hacer en esta funcion
  return fetch(api) // esto significa que cuando se ejecute esto ya pare que no haga nada mas, termina el proceso,api tiene lo que tiene API, el fetch sirve para consumir la url
    .then((response) => response.json()) // aqui se trae un arreglo, then es una promesa si sale algo mal o bien y se llaman funciones, el response siempre debe ir no es una variable es la respuesta que dara la api
    .then((json) => {
      //variable que esta obteniendo todo lo que tiene la variable api
      fillData(json.results), pagination(json.info); //se le envia la variable que tiene todo el json que en este caso seria json, el punto results es para decirle que de json grande solo traiga lo que tiene ese results
    }) //se crea una variable con cualquier nombre
    .catch((error) => {
      //por si depronto la respuesta de la promesa salio mala
      console.log("error in the API", error);
    });
};

const fillData = (data) => {
  // data es un arreglo que tiene lo que el json envio
  let html = ""; //aqui es donde se almanacena lo que trae
  data.forEach((p) => {

    html += '<div class="card mb-3 card text-white bg-dark mb-3 " style="max-width: 450px;">';
    html += ' <div class="row g-0">';
    html += ' <div class="col-md-4">';
    html += `<img src="${p.image}" class="img-fluid rounded-start imagen" alt="...">`;
    html += "</div>";
    html += ' <div class="col-md-8">';
    html += '<div class="card-body">';
    html += `<h4 class="card-title">${p.name}</h4>`;
    html += `<h6 class="card-title">${p.status}-${p.species}</h6>`;
    html += "<br>";
    html += `<h6 class="card-title"><p class="card-text"><small class="text-muted">Creado</small></p>${p.created}</h6>`;  
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("characters").innerHTML = html;
};

const pagination = (info) => {
  let html = "";

  html += `<li class="page-item ${
    info.prev == null ? "disabled" : (prevDisabled = "")
  }">
  <a class="btn btn-dark" onclick="getAPI('${info.prev}')">Prev</a></li> `;

  html += `<li class="page-item  ${
    info.next == null ? "disabled" : (nextDisabled = "")} " >
  <a class="btn btn-secondary" onclick="getAPI('${info.next}')">Next</a></li>`;

  document.getElementById("pagination").innerHTML = html;
};

getAPI(API); // cuando se ejecuta se le pone la variable de la url, cuando esta se ejecute se devuelve a la funcion para que funcione
