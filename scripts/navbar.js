
const allUsers = JSON.parse(localStorage.getItem('teamUp_users'))
const activeUser = JSON.parse(localStorage.getItem('teamUp_currentUser'))
const pageUrl = window.location.href
let activePage
if(pageUrl.includes('home')){
     activePage = 'home'
     $('#home').addClass('active')
     $('#account').removeClass('active')
}else if(pageUrl.includes('account')){
        activePage = 'account'
        $('#account').addClass('active')
        $('#home').removeClass('active') 
        
}

switch (activePage){
    case 'home':
        break;
    case 'account':
        break;
    default:
        $('#home').removeClass('active')
        $('#account').removeClass('active') 
        break;
}

// Add event listener to the logout button
$('#logout-btn').on('click', (e) => {
    window.location.href = '../pages/login.html'
    localStorage.removeItem('teamUp_currentUser')
})   

// Add event listener to the search bar
$('#search-bar').on('input', (e) =>{
    const searchText = e.target.value.toLowerCase()
    if(searchText.length < 1){
        $('#search-results').addClass('d-none')
        return
    }
    $('#search-results').empty()
    for(let x in allUsers){
        const user = allUsers[x]
        const userName = user.username.toLowerCase()
        if(userName.includes(searchText) && user.id != activeUser.id || user.email.toLowerCase().includes(searchText) && user.id != activeUser.id){
            console.log('hi')
            $('#search-results').append(`
                <div class="search-result">
                    <a href="../pages/home.html?userId=${user.id}">${user.username}</a>
                </div>
            `)
            $('#search-results').removeClass('d-none')
        }
    }
})

$('#home').on('click', () => {
    window.location.href = `../pages/home.html?userId=${activeUser.id}`
})
$('#account').on('click', () => {
    window.location.href = `../pages/account.html?userId=${activeUser.id}`
})