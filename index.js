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
  const skillsDetailArea = document.getElementById("skills-detail-area");
  if (skillsDetailArea) {
    skillsDetailArea.insertAdjacentHTML("beforeend", skillTables);
  }
};

addTableSkill();

//add hover title about me
const titleAbout = document.getElementById("main-title");
if (titleAbout) {
  titleAbout.onmouseover = (event) => {
    event.target.innerText = "Full Stack Overflow :D";
  };
  titleAbout.onmouseout = (event) => {
    event.target.innerText = "Full Stack Developer";
  };
}

//experience timeline animation
(function ($) {
  $(window).on("scroll", function () {
    fnOnScroll();
  });

  $(window).on("resize", function () {
    fnOnResize();
  });

  var agTimeline = $(".js-timeline"),
    agTimelineLine = $(".js-timeline_line"),
    agTimelineLineProgress = $(".js-timeline_line-progress"),
    agTimelinePoint = $(".js-timeline-card_point-box"),
    agTimelineItem = $(".js-timeline_item"),
    agOuterHeight = $(window).outerHeight(), // include padding,margin,...
    agHeight = $(window).height(), //not include
    f = -1,
    agFlag = false;

  function fnOnScroll() {
    offsetScroll = $(window).scrollTop(); //get current position of scroll bar

    fnUpdateFrame();
  }

  function fnOnResize() {
    offsetScroll = $(window).scrollTop();
    agHeight = $(window).height();

    fnUpdateFrame();
  }

  function fnUpdateWindow() {
    agFlag = false;

    //recalc line position
    agTimelineLine.css({
      top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top, //draw line from first point time
      bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top //draw line to last point time
    });

    f !== offsetScroll && ((f = offsetScroll), agHeight, fnUpdateProgress());
  }

  function fnUpdateProgress() {
    // offset last item
    var offsetLastItem = agTimelineItem.last().find(agTimelinePoint).offset().top;

    //if scroll over 1/2 screen start animation timeline
    i = offsetLastItem + offsetScroll - $(window).scrollTop();
    a = agTimelineLineProgress.offset().top + offsetScroll - $(window).scrollTop();
    n = offsetScroll - a + agOuterHeight / 2; // bat dau tinh scroll tu 1/2 man hinh nen + them 1/2 outerheight
    i <= offsetScroll + agOuterHeight / 2 && (n = i - a); //neu offset last item < 1/2 man hinh thi set luon
    agTimelineLineProgress.css({ height: n + "px" });

    agTimelineItem.each(function () {
      var offsetTop = $(this).find(agTimelinePoint).offset().top;

      offsetTop + offsetScroll - $(window).scrollTop() < offsetScroll + 0.5 * agOuterHeight ? $(this).addClass("js-ag-active") : $(this).removeClass("js-ag-active");
    });
  }

  function fnUpdateFrame() {
    agFlag || requestAnimationFrame(fnUpdateWindow);
    agFlag = true;
  }
})(jQuery);

//scroll visible element animation
// const observer = new IntersectionObserver(
//   (entries) => {
//     if (entries?.length > 0 && entries[0]) {
//       entries.forEach((item) => {
//         if (item?.isIntersecting === true) {
//           console.log(item.target.className);
//           item.target.style.transform = "translateX(0%)";
//         }
//       });
//     }
//   },
//   { threshold: [0.2] }
// );

// observer.observe(document.getElementById("about-me-stone"));
// observer.observe(document.getElementById("skill-area"));
// observer.observe(document.getElementById("experiences-area"));
// observer.observe(document.getElementById("education-area"));
// observer.observe(document.getElementById("certifications-area"));
// observer.observe(document.getElementById("contact-area"));
