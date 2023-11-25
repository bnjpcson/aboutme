// alert("hello");

// doc.getElementById('image').addEventListener('click', (ev) => {
//     alert("Hello World");
// });

// doc.addEventListener('contextmenu', event => event.preventDefault());

// doc.onkeydown = function (e) {
//     if (
//         (e.keyCode == 123) || // disable F12 key
//         (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // disable I key
//         (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // disable J key
//         (e.ctrlKey && e.keyCode == 85) // disable U key
//     ) {
//         return false;
//     }
// }

// var header = document.getElementById("myNav");
// var btns = header.getElementsByClassName("nav-link");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

function scrollToPage(page) {
  var element = document.getElementById(page);
  element.scrollIntoView();
}

const home = document.getElementById("navhome");
const about = document.getElementById("navabout");
const projects = document.getElementById("navprojects");
const certificates = document.getElementById("navcertificates");

function toggleNav(id) {
  home.classList.remove("active");
  about.classList.remove("active");
  projects.classList.remove("active");
  certificates.classList.remove("active");

  switch (id) {
    case "home":
      home.classList.add("active");
      break;
    case "about":
      about.classList.add("active");
      break;
    case "projects":
      projects.classList.add("active");
      break;
    case "certificates":
      certificates.classList.add("active");
      break;
  }
  console.log(id);
}

let date = new Date();
document.getElementById("date").innerHTML = date.getFullYear();
