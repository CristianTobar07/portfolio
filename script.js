let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  const skills = document.getElementById("skills");
  const distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  console.log({ distancia_skills });
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("typescript");
    habilidades[2].classList.add("react");
    habilidades[3].classList.add("reactnativo");
    habilidades[4].classList.add("angular");
    habilidades[5].classList.add("vue");
    habilidades[6].classList.add("nodejs");
    habilidades[7].classList.add("nosql");
    habilidades[8].classList.add("comunicacion");
    habilidades[9].classList.add("trabajo");
    habilidades[10].classList.add("creatividad");
    habilidades[11].classList.add("dedicacion");
    habilidades[12].classList.add("proyect");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
