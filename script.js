let menuVisible = false;

const linkCurriculum = `${window.location.origin}/media/curriculum.pdf`;
const link = document.querySelector("#download_curriculum a");
link.href = linkCurriculum;

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

const listTechnisSkills = [
  { key: "javascript", name: "Javascript", percentage: 95 },
  { key: "typescript", name: "Typescript", percentage: 95 },
  { key: "react", name: "React", percentage: 95 },
  { key: "reactnativo", name: "React Native", percentage: 85 },
  { key: "angular", name: "Angular", percentage: 95 },
  { key: "vue", name: "Vue", percentage: 85 },
  { key: "nodejs", name: "Node.js", percentage: 90 },
  { key: "database", name: "Bases de datos", percentage: 90 },
];

const listProfesionalSkills = [
  { key: "comunicacion", name: "Comunicación", percentage: 95 },
  { key: "trabajo", name: "Trabajo", percentage: 95 },
  { key: "creatividad", name: "Creatividad", percentage: 100 },
  { key: "dedicacion", name: "Dedicación", percentage: 100 },
  { key: "proyect", name: "Proyección", percentage: 95 },
];

function createElements(idElement, listSkills) {
  const container = document.getElementById(idElement);

  listSkills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");
    const skillName = document.createElement("span");
    skillName.textContent = skill.name;
    const barraSkill = document.createElement("div");
    barraSkill.classList.add("barra-skill");
    const progreso = document.createElement("div");
    progreso.classList.add("progreso");
    progreso.style.width = `${skill.percentage}%`;
    const porcentaje = document.createElement("span");
    porcentaje.textContent = `${skill.percentage}%`;

    progreso.appendChild(porcentaje);
    barraSkill.appendChild(progreso);
    skillDiv.appendChild(skillName);
    skillDiv.appendChild(barraSkill);
    container.appendChild(skillDiv);
  });
}

function effeectSkills(listSkills) {
  const skills = document.getElementById("skills");
  const distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    listSkills.forEach((skill, index) => {
      return habilidades[index].classList.add(skill.key);
    });
  }
}

function addPercentageSkills(listSkills) {
  listSkills.forEach((skill) => {
    const styles = `
      .skills .skill .${skill.key} {
        width: 0%;
        animation: 2s ${skill.key} forwards;
      }
      @keyframes ${skill.key} {
        0% {
          width: 0%;
        }
        100% {
          width: ${skill.percentage}%;
        }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.nodeType = "text/css";
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    return true;
  });
}

createElements("col_left", listTechnisSkills);
createElements("col_right", listProfesionalSkills);
addPercentageSkills(listTechnisSkills);
addPercentageSkills(listProfesionalSkills);

window.onscroll = function () {
  effeectSkills(listTechnisSkills);
  // effeectSkills(listProfesionalSkills);
};
