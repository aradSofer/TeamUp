import * as helpers from "./utils/helpers.js";

const currentUser = JSON.parse(localStorage.getItem("teamUp_currentUser"));
const allUsers = JSON.parse(localStorage.getItem("teamUp_users"));
const countries = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BR: "Brazil",
  BN: "Brunei",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo - Brazzaville",
  CD: "Congo - Kinshasa",
  CR: "Costa Rica",
  CI: "Côte d’Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GR: "Greece",
  GD: "Grenada",
  GT: "Guatemala",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HN: "Honduras",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Laos",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MR: "Mauritania",
  MU: "Mauritius",
  MX: "Mexico",
  FM: "Micronesia",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PL: "Poland",
  PT: "Portugal",
  QA: "Qatar",
  RO: "Romania",
  RU: "Russia",
  RW: "Rwanda",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "São Tomé and Príncipe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  KR: "South Korea",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syria",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VA: "Vatican City",
  VE: "Venezuela",
  VN: "Vietnam",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

function populateCountrySelect(htmlElementId) {
  function getFlagEmoji(countryCode) {
    return countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt())
      );
  }

  const select = document.getElementById(htmlElementId);

  for (const [code, name] of Object.entries(countries)) {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = `${getFlagEmoji(code)} ${name}`;
    select.appendChild(option);
  }
}
function createMoreSkillFields(totalSkills, isMain) {
  let skillsExtension = document.createElement("div");
  skillsExtension.id = `skills-ext`;
  let x = document.createElement("div");
  $(skillsExtension).addClass("row d-flex justify-content-between");
  x.className = "col-10";
  x.innerHTML = `
                <div class="d-flex justify-content-between mb-3" id="skills2">
                    <input id="skill-${
                      totalSkills + 1
                    }" type="text" class="form-control" placeholder="Skill ${
    totalSkills + 1
  }">
                    <input id="skill-${
                      totalSkills + 2
                    }" type="text" class="form-control" placeholder="Skill ${
    totalSkills + 2
  }">
                    <input id="skill-${
                      totalSkills + 3
                    }" type="text" class="form-control" placeholder="Skill ${
    totalSkills + 3
  }">
                </div>
                `;

  totalSkills += 3;
  $(skillsExtension).append(x);
  if (isMain) {
    $("#skills-container-main").append(skillsExtension);
  } else if (isMain == false) {
    console.log("hi");
    $("#skills-container").append(skillsExtension);
  }
  //   totalSkills+= 3
  console.log(totalSkills);
  if (totalSkills == 9) {
    $("#addSkill").prop("disabled", true).css("opacity", "0.5");
  }
  return totalSkills;
}

if (!currentUser) {
  window.location.href = "../pages/login.html";
} else if (currentUser.username == "") {
  $("#account-content").addClass("d-none");
  let onBoardingPopUp = new bootstrap.Modal(
    document.getElementById("dynamic-popup"),
    {
      backdrop: "static",
      keyboard: false,
    }
  );
  $("#dynamic-popup .modal-title").text("Let's Get To Know You..");
  $("#dynamic-popup .modal-body").html(`
        <div class="onboarding-steps" id="step-1">
    <div class="row">
        <div class="col-12">
            <h5 class="text-center">Welcome to TeamUp!</h5>
            <p class="text-center">We are excited to have you on board. Please fill in the details below to complete your profile.</p>
        </div>
    </div> 

    <div class="row justify-content-start">
        <div class="col-7">
            <div class="input-group d-flex justify-content-center mb-3 mt-5">
                <label id="uploaderLabel" class="user-avatar-label py-5" for="profilePic-uploader">Upload Profile Picture</label>
                <img id="profilePic-preview" class="" src="../" alt="Profile Picture" class="img-fluid" style="display:none;">
                </div>
                <input type="file" class="form-control" id="profilePic-uploader" accept="image/*" style="display: none;">
            <div class="mb-3">
                <select class="form-select" id="country" name="country" required>
                    
                </select>
            </div>

        </div>

        <div class="col-5">
            <div class="form-group mt-4 mb-3">
                <input id="email" type="text" class="form-control">
            </div>
            <div class="form-group mb-3">
                <input id="fullName" type="text" class="form-control" placeholder="Full Name" required>
            </div>
            <div class="form-group mb-3">
                <input id="username" type="text" class="form-control" placeholder="Username" required>
            </div>
            <div class="form-group mb-3">
                <input id="dateOfBirth" type="text" class="form-control" placeholder="dd/mm/yyyy" required>
            </div>
            
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <label for="links" class="label">Social Media Links</label>
        </div>
    </div>

    <div id="links" class="row d-flex justify-content-between">
        <div class="col-6">
            <input id="linkedin" type="text" class="form-control" placeholder="LinkedIn">
        </div>
        <div class="col-6 d-flex">
            <input id="github" type="text" class="form-control" placeholder="GitHub">
        </div>
    </div>
</div> 

<div class="onboarding-steps d-none" id="step-2">
    <div class="row">
        <div class="col-12">
            <h5 class="text-center">We Want To Know More!</h5>
            <p class="text-center">This is the place to brag! <br> Tell us more about you and your skills.</p>
        </div>
    </div>

     <div class="form-group mb-3">
                 <label for="about" class="form-label">What is Your profession?</label>
                <input id="role" type="text" class="form-control" placeholder="Current Position" required>
            </div>
    <div class="row">
        <div class="mb-3">
            <label for="about" class="form-label">About</label>
            <textarea class="form-control" id="about" rows="3"></textarea>
        </div>
    </div>

    <div id="skills-container">
        <div class="row d-flex justify-content-between">
            <div class="col-10">
                <div class="d-flex justify-content-between mb-3" id="skills">
                    <input id="skill-1" type="text" class="form-control" placeholder="Skill 1">
                    <input id="skill-2" type="text" class="form-control" placeholder="Skill 2">
                    <input id="skill-3" type="text" class="form-control" placeholder="Skill 3">
                </div>
            </div>
            <div class="col-2 mb-2">
                <button class="btn btn-light" id="addSkill">
                    <img src="../styles/assets/plus.svg" style="transform: scale(1.7)">
                </button>
            </div>
        </div>
    </div>
</div>

<div class="onboarding-steps d-none" id="step-3">
    <div class="row">
        <div class="col-12">
            <h5 class="text-center">Almost Done!</h5>
            <p class="text-center">Choose Your Extensions</p>
        </div>
    </div>

    <div id="api-selectors" class="row d-flex justify content-around w-100">
        <div class="col-6">
            
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="weather">
                <label class="form-check-label" for="weather">Weather API</label>
                </div>
                <img id="weather-img" src="../styles/assets/weather-api-icon.svg" alt="" class="img-fluid rounded-circle" style="width: 150px; height: 150px;margin-top: -8%">
        </div>
        <div class="col-6">
            
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="exchange">
                <label class="form-check-label" for="exchange">Exchange API</label>
                </div>
                <img id="exchange-img" src="../styles/assets/currency-exchange-api-icon.jpg" alt="" class="img-fluid rounded-circle" style="width: 90px; height: 90px; margin-left: 12%; margin-top: 2%; opacity: 0.9;">
        </div>
    </div>
</div>

        `);
  populateCountrySelect("country");
  $("#dynamic-popup .modal-footer").html(`
        <button class="btn btn-secondary" id="prevStep" disabled>Previous</button>
        <button class="btn btn-primary" id="nextStep">Next</button>
        `);

  $("#email")
    .val(currentUser.email)
    .css({ "pointer-events": "none", opacity: "0.5", "font-size": "90%" });
  $("#fullName").val(currentUser.fullName);

  let fullName = $("#fullName").val();
  let dateOfBirth = $("#dateOfBirth").val();
  let role = $("#role").val();
  if (!fullName || !dateOfBirth || !role) {
    $("#nextStep").prop("disabled", true);
  }

  // Profile Picture Preview:
  $("#profilePic-uploader").on("change", (e) => {
    let profilePic = e.target.files[0];
    if (profilePic) {
      let src = URL.createObjectURL(profilePic);
      $("#profilePic-preview").attr("src", src).css({
        display: "block",
        width: "150px",
        height: "150px",
        "border-radius": "50%",
      });
      $("#uploaderLabel").addClass("d-none");
    }

    // change profile picture
    $("#profilePic-preview").on("click", () => {
      $("#profilePic-uploader").click();
    });
  });
  // Check if the user has filled in the details (occurs on '.form-control' change):
  $(".form-control").on("change", () => {
    if (
      $("#fullName").val() != "" &&
      $("#dateOfBirth").val() != "" &&
      $("#usename").val() != ""
    ) {
      $("#nextStep").prop("disabled", false);
    }
  });
  //

  // Step Control Behavior:
  function stepsController(step) {
    switch (step) {
      case 1:
        $("#step-1").removeClass("d-none");
        $("#step-2").addClass("d-none");
        $("#prevStep").addClass("d-none");
        break;

      case 2:
        $("#step-1").addClass("d-none");
        $("#step-3").addClass("d-none");
        $("#step-2").removeClass("d-none");
        $("#prevStep").removeClass("d-none").prop("disabled", false);
        $("#nextStep").text("Next");
        $("#nextStep").prop("disabled", false);

        break;
      case 3:
        $("#step-1").addClass("d-none");
        $("#step-2").addClass("d-none");
        $("#step-3").removeClass("d-none");
        $("#prevStep").prop("disabled", false);
        $("#nextStep").text("Finish");
        break;
      default:
        break;
    }
  }

  let step = 1;

  stepsController(step);
  if (step == 1) {
    $("#prevStep").addClass("d-none");
  }
  $("#nextStep").on("click", async () => {
    if ($("#nextStep").text() == "Finish") {
      let skills = [];
      for (let i = 1; i <= totalSkills; i++) {
        if ($(`#skill-${i}`).val() != "") {
          skills.push($(`#skill-${i}`).val());
        }
      }
      let socialMediaLinks = {
        linkedin: $("#linkedin").val(),
        github: $("#github").val(),
      };
      let about = $("#about").val();
      let weather = $("#weather").is(":checked");
      let exchange = $("#exchange").is(":checked");

      currentUser.username = $("#username").val();
      currentUser.fullName = $("#fullName").val();

      currentUser.age = $("#age").val();
      currentUser.role = $("#role").val();
      currentUser.picture = await helpers.convertImg("profilePic-uploader");
      currentUser.country = $("#country").val();
      currentUser.skills = skills;
      currentUser.accountLinks = socialMediaLinks;
      currentUser.about = about;
      currentUser.accountPreferences.isWeather = weather;
      currentUser.accountPreferences.isExchange = exchange;

      for (let x in allUsers) {
        if (allUsers[x].email == currentUser.email) {
          allUsers[x] = currentUser;
        }
      }
      localStorage.setItem("teamUp_users", JSON.stringify(allUsers));
      localStorage.setItem("teamUp_currentUser", JSON.stringify(currentUser));
      onBoardingPopUp.hide();
      window.location.href = `../pages/home.html?userId=${currentUser.id}`;
    } else {
      step++;
      stepsController(step);
    }
  });

  $("#prevStep").on("click", () => {
    step--;
    stepsController(step);
  });

  // Add Skill Button:
  let totalSkills = 3;
  $("#addSkill").on("click", () => {
    createMoreSkillFields(totalSkills, false);
    totalSkills += 3;
  });

  onBoardingPopUp.show();
} else {
  populateCountrySelect("country-edit");
  $("#save-btn").attr("disabled", true).css("opacity", "0.5");
  $("#cancel-btn").attr("disabled", true).css("opacity", "0.5");
  let isChanges = false;
  $("#account-content").removeClass("d-none");
  $("#profilePic").attr("src", currentUser.picture);
  $("#about-main").text(currentUser.about);
  $("#about-edit").val(currentUser.about);
  $("#profilePic").attr("alt", currentUser.fullName);
  $("#username-main").text(currentUser.username);
  $("#username-edit").val(currentUser.username);
  $("#fullName-main").text(currentUser.fullName);
  $("#fullName-edit").val(currentUser.fullName);
  $("#email-main").text(currentUser.email);
  $("#email-edit").val(currentUser.email);
  $("#role-edit").val(currentUser.role);
  $("#linkedin-edit").val(currentUser.accountLinks.linkedin);
  $("#github-edit").val(currentUser.accountLinks.github);
  $("#country-edit").val(currentUser.country);
  $("#age-edit")
    .val(currentUser.age)
    .css({ "pointer-events": "none", opacity: "0.5", "font-size": "90%" });
  $("#phone-edit").val(currentUser.phone);
  $("#website-edit").val(currentUser.accountLinks.website);
  $("#address-edit").val(currentUser.address);
  $("#dateOfBirth-edit").val(currentUser.dateOfBirth);
  $("#weather-main").prop("checked", currentUser.accountPreferences.isWeather);
  $("#exchange-main").prop("checked", currentUser.accountPreferences.isExchange);

  for (let x in currentUser.education) {
    let degree = document.createElement("div");
    $(degree).addClass("d-flex justify-content-between mb-3 .degree-wrapper");
    degree.id = `degree-${x + 1}`;
    degree.innerHTML = `
            <input  type="text" class="form-control degree-val" placeholder="Degree" value="${
      currentUser.education[x].degree
    }">
            <input type="text" class="form-control university-val" placeholder="University" value="${
      currentUser.education[x].university
    }">
            `;
    $("#degree-container-main").append(degree);
  }

  for (let i = 0; i < currentUser.skills.length; i++) {
    let skill = document.createElement("div");
    $(skill).addClass("d-flex justify-content-between mb-3");
    skill.innerHTML = `
            <input id="skill-${
              i + 1
            }" type="text" class="form-control" placeholder="Skill ${
      i + 1
    }" value="${currentUser.skills[i]}">
            `;
    $("#skills-container-main").append(skill);

    $(`#skill-${i + 1}`).attr({
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "bottom",
      "data-bs-title": "Delete & Update to Remove Skill",
    });
  }
  let totalSkills;
  if (currentUser.skills.length < 3) {
    totalSkills = 3;
  } else {
    totalSkills = $("#skills-container-main .form-control").length;
  }
  $("#addSkill-main").on("click", () => {
    createMoreSkillFields(totalSkills, true);
    $("#save-btn").removeAttr("disabled").css("opacity", "1");
    $("#cancel-btn").removeAttr("disabled").css("opacity", "1");
    totalSkills += 3;
    if ($("#skills-ext .form-control").length == 6) {
      $("#addSkill").prop("disabled", true).css("opacity", "0.5");
    }
    return totalSkills;
  });

  $("#addDegree-main").on("click", () => {
    let degree = document.createElement("div");
    let totalDegrees = $("#degree-container-main .degree-wrapper").length;
    let index;
    if (totalDegrees == 0) {
      index = 1;
    } else {
      index = +totalDegrees + 1;
    }
    $(degree).addClass("d-flex justify-content-between mb-3 degree-wrapper");
    degree.id = `degree-${index}`;
    degree.innerHTML = `
            <input  type="text" class="form-control degree-val" placeholder="Degree">
            <input  type="text" class="form-control university-val" placeholder="University">
            `;
    $("#degree-container-main").append(degree);
    $("#save-btn").removeAttr("disabled").css("opacity", "1");
    $("#cancel-btn").removeAttr("disabled").css("opacity", "1");
  });

  $("#country-edit").on("change", (e) => {
    let countryCode = e.target.value;
    let currentUserCountry = currentUser.country;
    if (countryCode != currentUserCountry) {
      isChanges = true;
      $("#save-btn").removeAttr("disabled").css("opacity", "1");
      $("#cancel-btn").removeAttr("disabled").css("opacity", "1");
    } else {
      isChanges = false;

      $("#save-btn").attr("disabled", true).css("opacity", "0.5");
      $("#cancel-btn").attr("disabled", true).css("opacity", "0.5");
    }
  });
  let profilePicEdit;
  $("#profilePicInput").on("change", async (e) => {
    profilePicEdit = e.target.files[0];
    if (profilePicEdit) {
      let picture = $("#profilePic");
      let src = URL.createObjectURL(profilePicEdit);
      picture.attr("src", src);
      isChanges = true;
      $("#save-btn").removeAttr("disabled").css("opacity", "1");
      $("#cancel-btn").removeAttr("disabled").css("opacity", "1");
    }
  });

$('input[type="checkbox"]').on("change", (e) => {
    let checkbox = e.target;
    let isChecked = checkbox.checked;
    let currentUserCheckbox;
    if (checkbox.id == "weather-main"){
      currentUserCheckbox = currentUser.accountPreferences.isWeather;
    }else if (checkbox.id == "exchange-main"){
      currentUserCheckbox = currentUser.accountPreferences.isExchange;

    } 
    if (isChecked != currentUserCheckbox) {
      isChanges = true;
      $("#save-btn").removeAttr("disabled").css("opacity", "1");
      $("#cancel-btn").removeAttr("disabled").css("opacity", "1");
    } else {
      isChanges = false;
      $("#save-btn").attr("disabled", true).css("opacity", "0.5");
      $("#cancel-btn").attr("disabled", true).css("opacity", "0.5");
    }
})

  $(".form-control").on("change", (e) => {
    let id = e.target.id;
    let changedField = id.split("-")[0];
    let currentUserField;

    switch (changedField) {
      case "username":
        currentUserField = currentUser.username;
        break;
      case "fullName":
        currentUserField = currentUser.fullName;
        break;
      case "email":
        currentUserField = currentUser.email;
        break;
      case "role":
        currentUserField = currentUser.role;
        break;
      case "about":
        currentUserField = currentUser.about;
        break;
      case "age":
        currentUserField = currentUser.age;
        break;
      case "linkedin":
        currentUserField = currentUser.accountLinks.linkedin;
        break;
      case "github":
        currentUserField = currentUser.accountLinks.github;
        break;
      case "skill":
        currentUserField = currentUser.skills[id.split("-")[1] - 1];
        break;
      default:
        break;
    }
    let changedValue = e.target.value;
    if (changedValue != currentUserField) {
      isChanges = true;
      $("#save-btn").removeAttr("disabled").css("opacity", "1");
      $("#cancel-btn").removeAttr("disabled").css("opacity", "1");
    } else {
      isChanges = false;
      $("#save-btn").attr("disabled", true).css("opacity", "0.5");
      $("#cancel-btn").removeAttr("disabled").css("opacity", "1");
    }
  });
  $("#cancel-btn").on("click", () => {
    if (isChanges) {
      let discardChangesPopup = new bootstrap.Modal(
        document.getElementById("dynamic-popup"),
        {
          backdrop: "static",
          keyboard: false,
        }
      );
      $("#dynamic-popup .modal-title").text("Discard Changes?");
      $("#dynamic-popup .modal-body").html(`
                <p>Are you sure you want to discard the changes?</p>
              `);
      $("#dynamic-popup .modal-footer").html(`
                <button class="btn btn-primary" id="keepChanges-btn">Keep Changes</button>
                <button class="btn btn-secondary" id="discardChanges-btn">Discard</button>
              `);
      discardChangesPopup.show();
    }
    $("#discardChanges-btn").on("click", () => {
      let discardChangesPopup = bootstrap.Modal.getInstance(
        document.getElementById("dynamic-popup")
      );
      discardChangesPopup.hide();
      window.location.reload();
    });
    $("#keepChanges-btn").on("click", () => {
      let discardChangesPopup = bootstrap.Modal.getInstance(
        document.getElementById("dynamic-popup")
      );
      discardChangesPopup.hide();
      return;
    });
  });

  $("#save-btn").on("click", async () => {
    let skills = [];
    for (let i = 1; i <= totalSkills; i++) {
      if ($(`#skill-${i}`).val() != "") {
        skills.push($(`#skill-${i}`).val());
      }
    }
    let socialMediaLinks = {
      linkedin: $("#linkedin-edit").val(),
      github: $("#github-edit").val(),
    };
    let about = $("#about-edit").val();
    let weather = $("#weather-main").is(":checked");
    console.log(weather);
    let exchange = $("#exchange-main").is(":checked");
    console.log(exchange);
    let editedProfilePic = await helpers.convertImg("profilePicInput");

    if ($("#profilePic").attr("src") == editedProfilePic || !editedProfilePic) {
      currentUser.picture = currentUser.picture;
    } else {
      currentUser.picture = editedProfilePic;
    }

    currentUser.username = $("#username-edit").val();
    currentUser.fullName = $("#fullName-edit").val();
    currentUser.age = $("#age-edit").val();
    currentUser.role = $("#role-edit").val();
    currentUser.country = $("#country-edit").val();
    currentUser.skills = skills;
    currentUser.accountLinks = socialMediaLinks;
    currentUser.about = about;
    currentUser.accountPreferences.isWeather = weather;
    currentUser.accountPreferences.isExchange = exchange;
    currentUser.phone = $("#phone-edit").val();
    currentUser.accountLinks.website = $("#website-edit").val();
    currentUser.address = $("#address-edit").val();
    currentUser.dateOfBirth = $("#dateOfBirth-edit").val();
    

    class Degree {
      constructor(degree, university) {
        this.degree = degree;
        this.university = university;
      }
    }
    let degrees
    if (!currentUser.education) {
      degrees = [];
    }else if(currentUser.education.length == 0 ){
      degrees = [];
    }else{
      degrees = currentUser.education;
    }
    let totalDegrees = $("#degree-container-main .degree-wrapper").length;
    for (let i = 0; i < totalDegrees; i++) {
      if (
        $(`#degree-${i + 1} .degree-val`).val() == "" ||
        $(`#degree-${i + 1} .university-val`).val() == ""
      ) {
        continue;
      }
      let degree = new Degree(
        $(`#degree-${i + 1} .degree-val`).val(),
        $(`#degree-${i + 1} .university-val`).val()
      );
      degrees.push(degree);
    }
    currentUser.education = degrees;

    for (let x in allUsers) {
      if (allUsers[x].email == currentUser.email) {
        allUsers[x] = currentUser;
      }
    }

    localStorage.setItem("teamUp_users", JSON.stringify(allUsers));
    localStorage.setItem("teamUp_currentUser", JSON.stringify(currentUser));
    window.location.reload();
  });
}
// Tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// date of birth format validation:\
$("#dateOfBirth-edit").on("change", (e) => {
  console.log("hi");
  let date = new Date(e.target.value);
  if (e.target.validity.valid) {
    let age = calculateAge(date);
    $("#age-edit").val(age);
    if (date.getFullYear() < 1900) {
      return;
    }
  }
});

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
