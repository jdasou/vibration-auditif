
//menu burger

let body = document.getElementById('body');
let burger = document.getElementById('burger_open');
let menu = document.getElementById('menu');


burger.addEventListener("click", function(){
  menu.classList.toggle("display");
  body.classList.toggle("overflow");
});


let items = document.querySelectorAll('.item');


items.forEach(item => {
  item.addEventListener('click', () => {
   
    menu.classList.remove('display');
    body.classList.remove('overflow');
  });
});






//slider
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

let slidesCount = sliderImages.length;

let currentSlide = 1;

let slideNumberElement = document.getElementById("slider-number");

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationElement = document.createElement("ul");

paginationElement.setAttribute("id", "pagination-ul");

for (i = 1; i <= slidesCount; i++) {
  let paginationItem = document.createElement("li");

  paginationItem.setAttribute("data-index", i);

  paginationItem.appendChild(document.createTextNode(i));

  paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);

let paginationCreatedUl = document.getElementById("pagination-ul");

let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

theChecker();

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  slideNumberElement.textContent = `Stand ${currentSlide} of  ${slidesCount}`;

  removeAllActive();

  sliderImages[currentSlide - 1].classList.add("active");

  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
//contact
function verif() {
  let nom = document.getElementById("name").value;
  let sujet = document.getElementById("sujet").value;
  let mail = document.getElementById("emailAddress").value;
  let subject = document.getElementById("subject").value;
  let bouton = document.getElementById("btn");
  let emailRegex = /^\S+@\S+\.\S+$/;

  if (nom === "" || sujet === "" || mail === "" || subject === "") {
    bouton.disabled = true;
  } else if (!emailRegex.test(mail)) {
    alert("Veuillez entrer une adresse e-mail valide.");
    document.getElementById("btn").disabled = true;
  } else {
    bouton.disabled = false;
  }
}


function Popup() {
  
  
  let message = "message envoyer !";

  alert(message);
}
