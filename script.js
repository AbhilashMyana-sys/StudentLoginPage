const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.reg-link');
const btnpopup=document.querySelector('.button');
registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active')
});
loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active')
});
btnpopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup')
});