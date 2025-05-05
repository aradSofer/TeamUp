class User {
  constructor(id, email, password, fullName) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.username = "";
    this.country = "";
    this.age = "";
    this.title = "";
    this.about = "";
    this.skills = [];
    this.picture = "";
    this.accountLinks = {
      linkedin: "",
      github: "",
    };
    this.accountPreferences = {
      isWeather: "",
      isExchange: "",
    };
  }
}

const fullName = $("#fullName");
const email = $("#email");
const password = $("#password");

$("#register-btn").on("click", () => {
  if (fullName.val() === "" || email.val() === "" || password.val() === "") {
    alert("Please fill in all fields");
    return;
  }
  let allUsers = JSON.parse(localStorage.getItem("teamUp_users"));
  let id;
  if (!allUsers) {
    allUsers = [];
    id = 1;
  } else {
    for (let x in allUsers) {
      if (allUsers[x].email === email.val()) {
        alert("Email already exists");
        return;
      }
    }
    id = allUsers[allUsers.length - 1].id + 1;
  }
  const user = new User(id, email.val(), password.val(), fullName.val());
  allUsers.push(user);
  localStorage.setItem("teamUp_users", JSON.stringify(allUsers));
    alert("User registered successfully");
    fullName.val('');
    email.val('');
    password.val('');
    window.location.href = "../pages/login.html";
});
