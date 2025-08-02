  const menu = document.getElementById("menu");
  const navList = document.getElementById("nav-list-mobile");
  const headingEle = document.getElementById("sectionHome");
  const homeEle = document.getElementById("sectionHome");
  const aboutEle = document.getElementById("sectionAbout");
  const skillEle = document.getElementById("sectionSkills");
  const projectEle = document.getElementById("sectionProjects");
  const educationEle = document.getElementById("sectionEducation");
  const contactEle = document.getElementById("sectionContact");

  menu.addEventListener("click", function () {
    navList.classList.toggle("active");
    headingEle.classList.toggle("active");
  });

  contactEle.addEventListener('click',function(){
    navList.classList.remove("active");
  });

  aboutEle.addEventListener('click',function(){
    navList.classList.remove("active");
  });
  