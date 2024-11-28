const button = document.querySelector(".dropbtn");
const image = document.querySelector(".image");
const inputs = document.querySelectorAll(".inputs__text .input");
const contacts = document.querySelectorAll(".inputs .inputs__text .input");
const contactsButton = document.querySelector(".main__inner-inputs .button");
const section = document.querySelector(".main__section:nth-child(5) .main__inner  .main__inner-text");const textField = document.querySelector(".textField");
const textSubmitted = document.querySelector(".textSubmitted")
const hamb = document.querySelector("#hamb");
const nav = document.querySelector(".header nav");
const dropbtns = document.querySelectorAll(".dropbtn");
const dropdowns = document.querySelectorAll(".dropdown");
const dropdownContents = document.querySelectorAll(".dropdown-content");

for (let dropdown of dropdowns) {
  dropdown.firstElementChild.addEventListener("click", function () {
    if (window.matchMedia("(max-width: 1300px)").matches) {
      dropdown.lastElementChild.classList.add("kick");
    }
    let text = dropdown.lastElementChild;
    let child = text.firstElementChild;
    child.addEventListener("click", function () {
      text.classList.remove("kick");
      console.log(child)
    })
  })
}

window.addEventListener("resize",function(){
  if (window.matchMedia("(min-width: 1300px)").matches) {
    nav.classList.remove("show");
}else if(window.matchMedia("(max-width: 1300px)").matches){
  hamb.classList.remove("active");
  for (let dropdown of dropdowns) {
        dropdown.lastElementChild.classList.remove("kick");
  }}
})

for (let dropdownContent of dropdownContents) {
  let a = document.createElement('a');
  a.innerHTML = '< Back to the menu';
  a.style.fontWeight = "600";
  dropdownContent.prepend(a);
  a.addEventListener("click", function () {
    dropdownContent.classList.remove("kick");
  })
}

function hambHandler(e) {
  e.preventDefault();
  hamb.classList.toggle("active");
  nav.classList.toggle("show");
}
hamb.addEventListener("click", hambHandler);


contactsButton.addEventListener("click", function () {
  for (let contact of contacts) {
    if (contact.value === '' && textField.value === '') {
      contact.style.border = '1px solid #D73333';
      textField.style.border = '1px solid #D73333';
    } else {
      textSubmitted.style.display = 'block';
    }
  }

})
document.querySelector('form').onsubmit = function (event) {
  event.preventDefault();
  section.style.display = 'none';
  textSubmitted.style.display = 'block';
}

for (let input of inputs) {
  input.addEventListener('input', function () {
    if (input.value !== "") {
      input.style.border = '1px solid #5E5E5E'
    }
    else {
      input.style.border = '1px solid #D9D9D9'
    }
  })

}

button.addEventListener('click', function () {
  image.classList.toggle("transform")
})
