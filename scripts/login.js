const username = "root";
const pass = "123";

const btn = document.querySelector('#btn');
btn.onclick = function(){
    const usrTextArea = document.querySelector('#usr')
    const pswdTextArea = document.querySelector('#pass')
    if (usrTextArea.value === username && pswdTextArea.value === pass)
    {
        window.location.href='private.html';
    }
}