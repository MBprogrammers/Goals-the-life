let links = document.querySelectorAll(".info img");
let linksBottom = document.querySelectorAll(".scroll img");
let titleGoals = document.querySelectorAll(".title-goal");
let imgMra = document.querySelector(".scroll-mra");
let imgBg = document.querySelector(".scroll-bg");

window.onscroll = () => {
  if (scrollY <= 200) {
    document.querySelector(".scroll").style.display = "none";
  } else {
    document.querySelector(".scroll").style.display = "block";
  }
};

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    window.scroll({
      top: document.querySelector(link.getAttribute("data-name")).offsetTop,
      behavior: "smooth",
    });
    if (e.target.classList.contains("img-mra")) {
      imgMra.style.display = "none";
      imgBg.style.display = "block";
      imgBg.style.opacity = "1";
    } else {
      imgBg.style.display = "none";
      imgMra.style.display = "block";
      imgMra.style.opacity = "1";
    }
  });
});

titleGoals.forEach((titleGoal) => {
  // Select pragraph
  let numberGoalsTitle = titleGoal.lastElementChild;
  // Select div class goal
  let boxGoal = titleGoal.parentElement;
  // Select number of goals completed
  let numberGoalsDone = boxGoal.querySelectorAll(".done").length;
  // Select All number goals
  let numberAllGoals = boxGoal.querySelectorAll("li").length;
  // Select span progres goal
  let spanProgres = boxGoal.children[1].querySelector("span");

  spanProgres.setAttribute(
    "data-progres",
    ((numberGoalsDone / numberAllGoals) * 100).toFixed(1) + "%"
  );

  spanProgres.style.width = spanProgres.getAttribute("data-progres");

  // Add number of goals completed and all number goals in pragraph
  numberGoalsTitle.innerHTML = `${numberGoalsDone} from ${numberAllGoals}`;

  titleGoal.addEventListener("click", () => {
    // Select icon
    let icon = titleGoal.children[1];
    let progres = boxGoal.children[1];
    let content = boxGoal.children[2];

    // Check on icon if was has on class fa-chevron-down or no
    if (icon.classList.contains("fa-chevron-down")) {
      // Remove class fa-chevron-down from on the icon
      icon.classList.remove("fa-chevron-down");
      // Add class fa-chevron-up on the icon
      icon.classList.add("fa-chevron-up");
      // Add class open on goal div
      boxGoal.classList.add("open");
      // Height the goal is open
      let height =
        titleGoal.clientHeight +
        progres.clientHeight +
        content.clientHeight +
        "px";
      // Add height to goal div is open
      boxGoal.style.height = height;

      // if icon doesn`t has on class fa-chevron-down
    } else {
      // Remove class fa-chevron-up from on the icon
      icon.classList.remove("fa-chevron-up");
      // Add class fa-chevron-down on the icon
      icon.classList.add("fa-chevron-down");
      // Remove class open on goal div
      boxGoal.classList.remove("open");
      // Height the goal is close
      let height = titleGoal.clientHeight + progres.clientHeight + 9 + "px";
      // Add height to goal div is close
      boxGoal.style.height = height;
    }
  });
});

linksBottom.forEach((link) => {
  link.addEventListener("click", (e) => {
    window.scroll({
      top: document.querySelector(link.getAttribute("data-name")).offsetTop,
      left: 100,
      behavior: "smooth",
    });
    if (e.target.classList.contains("scroll-mra")) {
      imgMra.style.display = "none";
      imgBg.style.display = "block";
      imgBg.style.opacity = "1";
    } else {
      imgBg.style.display = "none";
      imgMra.style.display = "block";
      imgMra.style.opacity = "1";
    }
  });
});
