// menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



// scroll link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };

    });

let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY > 100);

//remove mwnu icon

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// swipper
var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

// darkmode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .services-container, .projects-box, .testimonial-wrapper,.contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img .boximg', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


// email
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const subject = document.getElementById("body");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> 
                       Email: ${email.value}<br> 
                       Phone-Number: ${phone.value}<br> 
                       Message: ${message.value}<br>`;
  Email.send({
    SecureToken: "62ac87f7-138d-43d4-afcf-9043d5c986f4",
    To: 'nishalnthingalaya1@gmail.com',
    From: "nishalnthingalaya1@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Success",
          text: "Message Sent Successfully",
          icon: "success"
        });
      }
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput()
  if (!fullName.classList.contains("error") && 
      !email.classList.contains("error") &&
      !phone.classList.contains("error") && 
      !subject.classList.contains("error") &&
      !message.classList.contains("error")) {
    sendEmail();
    form.reset();
    return false;
  }
});

function checkInput() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
      else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

//name animation
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Nishal";
  }, 0)
}

textLoad();

//btn read more
document.addEventListener("DOMContentLoaded", function() {
  var div = document.querySelector(".more");
  var div2 = document.querySelector(".android");
  var display1 = 0;
  var display2 = 0;

  function showblock() {
      if (display1 === 1) {
          div.style.display = 'none';
          display1 = 0;
          document.querySelector('#bt').textContent = "Read More";
      } else {
          div.style.display = 'block';
          display1 = 1;
          document.querySelector('#bt').textContent = "Read Less";
      }
  }

  function showblock1() {
      if (display2 === 1) {
          div2.style.display = 'none';
          display2 = 0;
          document.querySelector('#bt1').textContent = "Read More";
      } else {
          div2.style.display = 'block';
          display2 = 1;
          document.querySelector('#bt1').textContent = "Read Less";
      }
  }

  document.querySelector("#bt").addEventListener("click", showblock);
  document.querySelector("#bt1").addEventListener("click", showblock1);
});


