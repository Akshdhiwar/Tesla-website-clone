const openMenu = () =>{
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className='active';
}
const closeMenu = () =>{
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className='';
}

document.getElementById('menubtn').onclick = e =>{
    e.preventDefault();
    openMenu();
}

document.getElementById('closebtn').onclick = e =>{
    closeMenu();
}
document.querySelector('.backdrop').onclick = e =>{
    closeMenu();
}