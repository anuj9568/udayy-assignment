const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "Udayy" && password === "anuj_gupta") {
    //alert("You have successfully logged in.");
    window.location.assign("index.html");
    //location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
// function loadPage() {
//   window.location("index.html");
// }
