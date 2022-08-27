// change style header when scroll
window.onscroll = function () {
  headerColor();
};

function headerColor() {
  let header = document.getElementById("header");
  let menuItems = document.getElementsByClassName("menu-item");
  if (window.pageYOffset > 0) {
    header.classList.add("header--scroll");
    changeStyleMenuItems(menuItems, true);
  } else {
    header.classList.remove("header--scroll");
    changeStyleMenuItems(menuItems, false);
  }
}
function changeStyleMenuItems(menuItems, isSet) {
  if (menuItems?.length === 0) return;
  for (let index = 0; index < menuItems.length; index++) {
    const element = menuItems[index];
    isSet ? element.classList.add("menu-item--scroll") : element.classList.remove("menu-item--scroll");
  }
}

// typing effect
const welcomeRoleLoad = () => {
  const listRole = ["Developer", "Designer", "Freelancer", "..."];
  let index = 0;
  setInterval(() => {
    const welcomeRole = document.getElementById("welcome-role");
    if (!welcomeRole) return;

    welcomeRole.textContent = listRole[index];
    index = index === listRole.length - 1 ? 0 : index + 1;
  }, 3800);
};
welcomeRoleLoad();

//add skill data table
const addTableSkill = () => {
  const dataSkill = {
    "PROGRAMMING LANGUAGES": ["JavaScript", "Java", "PHP", "Python", "HTML, CSS", "C/C++"],
    "FRAMEWORKS & PLATFORMS": ["NodeJS", "ReactJs / React Native", "Android", "JQuery", "Bootstrap"],
    DATABASE: ["MySQL", "InfluxDB", "Redis", "MongoDB", "Firebase", "Tools: Elastic Search"],
    "Cyber Security": ["Linux / Unix", "Web Security", "Network"],
    "VERSION CONTROL": ["Git"],
    "FOREIGN LANGUAGE": ["TOEIC 545/990"],
    KNOWLEDGE: [
      "Good understanding about design Highly Message Realtime System, Microservice System",
      "Good understanding about the Agile and Scrum process",
      "Good understanding software design, database design, RestfulAPI",
      "Good time management, presentation, and teamwork skills"
    ]
  };

  const iconSkill = {
    "PROGRAMMING LANGUAGES": "./resources/images/programing-icon.png",
    "FRAMEWORKS & PLATFORMS": "./resources/images/platform-icon.png",
    DATABASE: "./resources/images/database-icon.png",
    "Cyber Security": "./resources/images/cybersec-icon.png",
    "VERSION CONTROL": "./resources/images/version-control-icon.png",
    "FOREIGN LANGUAGE": "./resources/images/foreign-language-icon.png",
    KNOWLEDGE: "./resources/images/knowledge-icon.png"
  };

  let skillTables = "";
  for (let skill of Object.keys(dataSkill)) {
    const detail = dataSkill[skill];
    const icon = iconSkill[skill];
    let appendText = `<div class="skill">
      <span></span><span></span><span></span><span></span>
      <div class="skill-icon-area">
        <img class="icon" src="${icon}"></img>
      </div>
      <p class="title">${skill}</p>`;
    for (let item of detail) {
      appendText += `
        <div class="divide"></div>  
        <p class="item">${item}</p>
      `;
    }
    appendText += "</div>";
    skillTables += appendText;
  }
  console.log(skillTables);
  const skillsDetailArea = document.getElementById("skills-detail-area");
  if (skillsDetailArea) {
    skillsDetailArea.insertAdjacentHTML("beforeend", skillTables);
  }
};

addTableSkill();
