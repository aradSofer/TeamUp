let users = [
    {
        username : 'gilad',
        email : 'gilad@gmail.com',
        password : '123'
    },
    {
        username : '',
        email : 'dean@gmail.com',
        password : '1234'
    }
];
console.log(users)
localStorage.setItem("teamUp_users", JSON.stringify(users));

const Email = document.getElementById("Email");
const password = document.getElementById("password");
const allUsers = JSON.parse(localStorage.getItem("teamUp_users"));


// function sign_in()
// {
//     console.log(Email.value)
//     console.log(password.value)
// for(let i=0; i< allUsers.length; i++){
//    let user = allUsers[i];
//    if(user.Email == Email.value && user.password == password.value){
//        console.log(user)
//        localStorage.setItem("currentUser" , JSON.stringify(user));
//        if(user.userName != ''){
//          window.location = "../pages/home.html"
        
//         }else{
    
//          window.location = "../pages/account.html"
        
//         }
//     }else{
//     alert("credentials incorrect!!!");
//     }
// }

// }

const sign_inBtn = document.getElementById("sign_inBtn");
sign_inBtn.addEventListener(
    "click",
    ()=>{
        for(let i=0; i< allUsers.length; i++){
            let user = allUsers[i];
            if(user.Email == Email.value && user.password == password.value){
                console.log(user)
                localStorage.setItem("teamUp_currentUser" , JSON.stringify(user));
                if(user.username != ''){
                  window.location = "../pages/home.html"
                 return;
                 }else{
             
                  window.location = "../pages/account.html"
                 return;
                 }
             }
             
            }
            alert("incorrect credentials!!!");
    }
)