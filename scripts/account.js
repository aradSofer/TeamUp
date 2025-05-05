const currentUser = JSON.parse(localStorage.getItem("teamUp_currentUser"));

if (!currentUser) {
  window.location.href = "../pages/login.html";
} else if (currentUser.username == "") {
  let onBoardingPopUp = new bootstrap.Modal(
    document.getElementById("dynamic-popup"),
    {
      backdrop: "static",
      keyboard: false,
    }
  );
  $("#dynamic-popup .modal-title").text("Let's Get To Know You!");
  $("#dynamic-popup .modal-body").html(`
        <div class="onboarding-steps" id="step-1">
            <div class="row">
                <div class="col-12">
                    <h5 class="text-center">Welcome to TeamUp!</h5>
                    <p class="text-center">We are excited to have you on board. Please fill in the details below to complete your profile.</p>
                </div>
            <div class="row justify-content-start">
                <div class="col-7">
                    <div class="input-group d-flex justify-content-center mb-3 mt-5" >
                        <label class="input-group-text py-5" for="profilePic-uploader">Upload Profile Picture</label>
                        <input type="file" class="form-control visually-hidden" id="profilePic-uploader">
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
			            <input id="age" type="text" class="form-control" placeholder="Age" required>
			        </div>
                    <div class="form-group mb-3">
			            <input id="role" type="text" class="form-control" placeholder="Current Position" required>
			        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="onboarding-steps d-none" id="step-2">
            <div class="row">
                <div class="col-12">
                    <h5 class="text-center">We Want To Know More!</h5>
                    <p class="text-center">This is the place to brag! </br> Tell us more about you and your skills.</p>
                </div>
                    
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
                        <button class="btn btn-scondary" id="addSkill"><img src="../styles/assets/plus.svg" style="transform: scale(1.7)"></button>
                    </div>
                </div>    
            </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <label for="skills" class="label">Social Media Links</label>
                </div>
            <div class="row d-flex justify-content-between">
                <div class="col-6">
                    <input id="linkedin" type="text" class="form-control" placeholder="LinkedIn">
                </div>
                <div class="col-6 d-flex">
                    <input id="github" type="text" class="form-control" placeholder="GitHub">
                </div>    
            </div>
        </div>
        <div class="onboarding-steps d-none" id="step-3">
        Step3
        </div>
        
        `);
  $("#dynamic-popup .modal-footer").html(`
        <button class="btn btn-secondary" id="prevStep" disabled>Previous</button>
        <button class="btn btn-primary" id="nextStep">Next</button>
        `);

  $("#email")
    .val(currentUser.email)
    .css({ "pointer-events": "none", opacity: "0.5", "font-size": "90%" });
    $('#fullName').val(currentUser.fullName)

  let fullName = $("#fullName").val();
  let age = $("#age").val();
  let role = $("#role").val();
  let profilePic = $("#profilePic-uploader")[0].files[0];
  if (!fullName || !age || !role) {
    $("#nextStep").prop("disabled", true);
  }

  // Check if the user has filled in the details (occurs on '.form-control' change):
  $(".form-control").on("change", () => {
    if (
      $("#fullName").val() != "" &&
      $("#age").val() != "" &&
      $("#role").val() != ""
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
        $("#nextStep").prop("disabled", false)

        break;
      case 3:
        $("#step-2").addClass("d-none");
        $("#step-3").removeClass("d-none");
        $("#prevStep").prop("disabled", false);
        $("#nextStep").text("Finish");
        break;
      default:
        break;
    }
  }

  let step = 1
  stepsController(step);
  let totalSteps = 3;
  if (step == 1) {
    $("#prevStep").addClass("d-none");
  }
  $("#nextStep").on("click", () => {
    step++;
    stepsController(step);
  });

  $("#prevStep").on("click", () => {
    step--;
    stepsController(step);
  });

  // Add Skill Button:
  let totalSkills = 3;
  $("#addSkill").on("click", () => {
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
    console.log(x);
    $(skillsExtension).append(x);
    console.log(skillsExtension);
    $("#skills-container").append(skillsExtension);
    totalSteps++;
    console.log(totalSkills);
    if(totalSkills == 9){
        $("#addSkill").prop("disabled", true).css("opacity", "0.5");
    }
  });

  onBoardingPopUp.show();
}
