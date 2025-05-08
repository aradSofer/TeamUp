

const Email = document.getElementById("Email");
const password = document.getElementById("password");
const allUsers = JSON.parse(localStorage.getItem("teamUp_users"));


$('#registerRedirect').on('click', () => {
    window.location.href = "../pages/register.html";
})

const sign_inBtn = document.getElementById("sign_inBtn");
sign_inBtn.addEventListener(
    "click",
    ()=>{
        for(let i=0; i< allUsers.length; i++){
            let user = allUsers[i];
            if(user.email == Email.value && user.password == password.value){
                console.log(user)
                localStorage.setItem("teamUp_currentUser" , JSON.stringify(user));
                if(user.username != ''){
                  window.location = `../pages/home.html?userId=${user.id}`
                 return;
                 }else{
             
                  window.location = `../pages/account.html?userId=${user.id}`
                 return;
                 }
             }
             
            }
            alert("incorrect credentials!!!");
    }
)