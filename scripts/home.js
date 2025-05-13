const users = JSON.parse(localStorage.getItem("teamUp_users"));
const currentUser = JSON.parse(localStorage.getItem("teamUp_currentUser"));
let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('userId'); 
let userObj;

for (let i in users) {
    let user = users[i];
    if (+userId === user.id) {
        console.log("Matched user:", user);
        userObj = user;
        break;
    }
}

console.log("userObj after loop:", userObj);
$('#profileName').text(`${userObj.fullName}`);
$('#2').text(`${userObj.fullName}`);
$('#3').attr("data-typed-items" , `${userObj.fullName}`);
$('#1').attr("src" , userObj.picture);
$('#aboutImage').attr("src" , userObj.picture);
$('#aboutP').text(`${userObj.about}`);
$('#aboutHeader').text(`${userObj.role}`);
$('#country').text(`${userObj.country}`);
$('#age').text(`${userObj.age}`);
$('#email').text(`${userObj.email}`);
for(let i in userObj.education){
    $('#education').text(`${userObj.education[i].degree}`);
}
$('#phone').text(`${userObj.phone}`);
$('#bday').text(`${userObj.dateOfBirth}`);
$('#website').text(`${userObj.accountLinks.website}`);

let sumSkills = userObj.skills.length;
if(sumSkills % 3 == 0){
    let divRes =  (sumSkills / 3);
    console.log(divRes)
    for( let i = 0; i < divRes; i++){
        let innerSkillsContainer = document.createElement('div');
        innerSkillsContainer.className = "col-lg-6";
        innerSkillsContainer.id = `innerSkillsContainer[${i+1}]`;
        $('#SkillsContainer').append(innerSkillsContainer);
    }
}else{
    let divRes =  (sumSkills / 3) +1;
    console.log(divRes)
    for( let i = 0; i < divRes; i++){
        let innerSkillsContainer = document.createElement('div');
        innerSkillsContainer.className = "col-lg-6";
        innerSkillsContainer.id = `innerSkillsContainer[${i+1}]`;
        $('#SkillsContainer').append(innerSkillsContainer);
    }
    
}
    
    for(let x in userObj.skills){
        let skill = userObj.skills[x];
        let  skillDiv = document.createElement('div');
        skillDiv.className = 'progress';
        if(x <= 2){
            skillDiv.innerHTML = `<span class="skill"><span>${skill}</span> <i class="val">100%</i></span>
            <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
            
            let innerSkillsContainer = document.getElementById('innerSkillsContainer[1]')
            innerSkillsContainer.append(skillDiv);
        }else if(x > 2 && x <= 5){
            skillDiv.innerHTML = `<span class="skill"><span>${skill}</span> <i class="val">100%</i></span>
            <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
            let innerSkillsContainer = document.getElementById('innerSkillsContainer[2]')
            innerSkillsContainer.append(skillDiv);
            
        }else{
            skillDiv.innerHTML = `<span class="skill"><span>${skill}</span> <i class="val">100%</i></span>
            <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`;
            let innerSkillsContainer = document.getElementById('innerSkillsContainer[3]')
                         innerSkillsContainer.append(skillDiv);
         }
    
    
    
    
    // $('#SkillsContainer').html(`<div id="innerSkillsContainer[${i}]" class="col-lg-6"</div>`);
    //        console.log(skill)
    //        $(`#innerSkillsContainer[${i}]`).html(`<div class="progress">
    //                  <span class="skill"><span id="skill1">${skill}</span> <i class="val">100%</i></span>
    //                  <div class="progress-bar-wrap">
    //                    <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    //                  </div>
    //                </div>`);
       }
    
console.log(sumSkills);









// const users = JSON.parse(localStorage.getItem("teamUp_users"));
// const currentUser = JSON.parse(localStorage.getItem("teamUp_currentUser"));
// let urlParams = new URLSearchParams(window.location.search);
// let userId = urlParams.get('userId'); 
// let userObj
// for(let i in users){
//     let user = users[i];
//     if(userId == user.id){
//         userObj = user;
//         break;
//     }
// }

// console.log(userObj)
$('#profilePic').attr("src" , "");











// const user = JSON.parse(localStorage.getItem('teamUp_currentUser'));
// console.log(user);
// $('#username').text(`${user.fullName}`);
// $('#starter_fullname').text(`${user.fullName}`);
// const title = document.getElementById('title');
// title.innerHTML = `I'm 
//                     <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span>
//                     <span class="typed-cursor typed-cursor--blink" aria-hidden="true">
//                     </span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
//                     `
// $('#image').attr("src", "../styles/assets/profilePic1.jpeg");
// $('#aboutDesc').text(`About me :  ${user.about}`);
// $('#usertitle').text(`Title : ${user.role}`);
// $('#age').text(`age : ${user.age}`);
// $('#country').text(`country : ${user.country}`);
// for(let i in user.skills){
//     const skills = document.getElementById(`skillsInf`);
//     skills.innerHTML += ` <ul> 
//                             <li>${user.skills[i]}</li> 
//                          </ul>`;
// }
// $('#contactContainer').html(`<h4>Email Address:<br> ${user.email}</h4>`);
