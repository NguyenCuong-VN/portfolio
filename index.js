window.onscroll = function () {
  headerColor();
  loadContainerOnScroll();
};

// change style header when scroll
function headerColor() {
  let header = document.getElementById("header");
  let menuItems = document.getElementsByClassName("menu-item");
  let headerLogo = document.getElementById("header-logo");
  if (window.pageYOffset > 1) {
    header.classList.add("header--scroll");
    headerLogo.src = "./resources/images/macuo-logo-primary-color.svg";
    changeStyleMenuItems(menuItems, true);
  } else {
    header.classList.remove("header--scroll");
    headerLogo.src = "./resources/images/macuo-logo.svg";
    changeStyleMenuItems(menuItems, false);
  }
}
function changeStyleMenuItems(menuItems, isSet) {
  if (menuItems?.length === 1) return;
  for (let index = 0; index < menuItems.length; index++) {
    const element = menuItems[index];
    isSet ? element.classList.add("menu-item--scroll") : element.classList.remove("menu-item--scroll");
  }
}

// load container on scroll
const items = document.querySelectorAll(".item-block");
function loadContainerOnScroll() {
  items.forEach((item) => {
    if (item.offsetTop - window.scrollY < 500) {
      item.classList.add("active-load-container");
    }
  });
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
    "PROGRAMMING LANGUAGES, MARK UP": ["JavaScript", "Java", "PHP", "Python", "HTML, CSS", "Ruby"],
    "FRAMEWORKS & PLATFORMS": ["NodeJS", "ReactJs / React Native", "Android", "JQuery", "Bootstrap", "Ruby on Rails"],
    DATABASE: ["MySQL", "InfluxDB", "Redis", "MongoDB", "Firebase", "Tools: Elastic Search"],
    "Cyber Security": ["Linux / Unix", "Web Security", "Network"],
    "VERSION CONTROL": ["Git"],
    "FOREIGN LANGUAGE": ["TOEIC 545/990"],
    KNOWLEDGE: [
      "Good understanding about design Highly Message Realtime System, Microservice System",
      "Good understanding about the Agile and Scrum process",
      "Good understanding software design, database design, RestfulAPI",
      "Good time management, presentation, and teamwork skills"
    ],
    "CLOUD SYSTEM": ["Tencent Stack", "AWS Stack"]
  };

  const iconSkill = {
    "PROGRAMMING LANGUAGES, MARK UP": "./resources/images/programing-icon.png",
    "FRAMEWORKS & PLATFORMS": "./resources/images/platform-icon.png",
    DATABASE: "./resources/images/database-icon.png",
    "Cyber Security": "./resources/images/cybersec-icon.png",
    "VERSION CONTROL": "./resources/images/version-control-icon.png",
    "FOREIGN LANGUAGE": "./resources/images/foreign-language-icon.png",
    KNOWLEDGE: "./resources/images/knowledge-icon.png",
    "CLOUD SYSTEM": "./resources/images/cloud-icon.png"
  };

  let skillTables = "";
  const itemAnimationDelaysLoading = ["02", "04", "06", "08"];
  for (let skill of Object.keys(dataSkill)) {
    const detail = dataSkill[skill];
    const icon = iconSkill[skill];
    let appendText = `<div class="load-on-scroll animation-delay-${itemAnimationDelaysLoading[Math.floor(Math.random() * itemAnimationDelaysLoading.length)]} skill">
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

//add experiences timeline
const addTimelineExperiences = () => {
  const dataExperiences = [
    {
      mineStone: "2022",
      name: "Pixta VietNam",
      coverPhoto: "./resources/images/pixta-logo.jpg",
      timeline: "12/2022 - Now",
      role: "FullStack Developer",
      description: "Maintain & develop new features for selling image, footage,... marketplace",
      note: "More information in my CV"
    },
    {
      mineStone: "2022",
      name: "Napa Global",
      coverPhoto: "./resources/images/Napa_Logo.jpg",
      timeline: "10/2022 - 12/2022 (disband branch)",
      role: "Back-end Developer",
      description: "Task & Reward platform with NFTs implement.",
      note: "More information in my CV"
    },
    {
      mineStone: "2021",
      name: "Novus Fintech",
      coverPhoto: "./resources/images/novus-fintech-image.png",
      timeline: "09/2021 - 07/2022",
      role: "Back-end Developer",
      description: "Stock trading system for HK & US market.",
      note: "More information in my CV"
    },
    {
      mineStone: "2020",
      name: "CDIT",
      coverPhoto: "./resources/images/cdit-image.jpg",
      timeline: "10/2020 - 03/2021",
      role: "Back-end Developer",
      description: "Warehouses & Devices Management system of MobiFone",
      note: "More information in my CV"
    },
    {
      mineStone: "2019",
      name: "University - Freelancer",
      coverPhoto: "./resources/images/ptit-image.png",
      timeline: "2019 - I'm still a freelancer now",
      role: "Full Stack Developer",
      description: "Create / Develop / Maintain products for client as a freelancer",
      note: "More information in my CV"
    }
  ];

  let experiencesTimeline = "";
  let isTitleRight = true;
  for (const experience of dataExperiences) {
    if (!experience?.mineStone) continue;

    let appendText = `
      <div class="js-timeline_item ag-timeline_item">
        <div class="ag-timeline-card_box">
          ${
            // mineStone & title, using CSS to render depend position of 2 field
            isTitleRight
              ? `
            <div class="js-timeline-card_point-box ag-timeline-card_point-box">
              <div class="ag-timeline-card_point">${experience.mineStone}</div>
            </div>
            <div class="ag-timeline-card_meta-box">
              <div class="ag-timeline-card_meta">${experience.name}</div>
            </div>
            `
              : `
            <div class="ag-timeline-card_meta-box">
              <div class="ag-timeline-card_meta">${experience.name}</div>
            </div>
            <div class="js-timeline-card_point-box ag-timeline-card_point-box">
              <div class="ag-timeline-card_point">${experience.mineStone}</div>
            </div>
            `
          }
        </div>
        <!-- content -->
        <div class="ag-timeline-card_item">
          <!-- content card -->
          <div class="ag-timeline-card_inner">
            <!-- image -->
            <div class="ag-timeline-card_img-box">
              <img src="${experience.coverPhoto}" class="ag-timeline-card_img" width="640" height="360" />
            </div>
            <!-- desc -->
            <div class="ag-timeline-card_info">
              <div class="ag-timeline-card_title">${experience.name}</div>
              <div class="ag-timeline-card_desc">
                <p class="experience-card_time">${experience.timeline}</p>
                <p class="experience-card_role">${experience.role}</p>
                <p class="experience-card_desc">${experience.description}</p>
                <p class="experience-card_note">${experience.note}</p>
              </div>
            </div>
          </div>
          <!-- arrow to timeline -->
          <div class="ag-timeline-card_arrow"></div>
        </div>
      </div>
    `;
    experiencesTimeline += appendText;

    isTitleRight = !isTitleRight;
  }
  const experienceDetailArea = document.getElementById("ag-timeline_list");
  if (experienceDetailArea) {
    experienceDetailArea.insertAdjacentHTML("beforeend", experiencesTimeline);
  }
};

addTimelineExperiences();

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
