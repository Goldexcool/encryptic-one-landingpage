const tuggleBtn = document.getElementById("menu");
const btn = tuggleBtn.querySelector("i");
const dropmenu = document.querySelector(".dropdown");

tuggleBtn.onclick = function () {
  dropmenu.classList.toggle("open");
  const isOpen = dropmenu.classList.contains("open");
  btn.classList.toggle("fa-bars", !isOpen);
  btn.classList.toggle("fa-x", isOpen);
};

var emailbtn = document.querySelector(".email_btn");
var error = document.querySelector(".errormess");


emailbtn.addEventListener("click", function (e) {
    e.preventDefault()
    var valid = document.getElementById("validemail").value

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valid)) {
    error.innerHTML = "Sign up Sucessful"
    error.classList.add("error")
    return true;
  } else {
    error.innerHTML = "Must enter a valid email"
    error.classList.add("error")
    return false;
  }
});


