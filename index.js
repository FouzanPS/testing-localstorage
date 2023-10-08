const content = document.getElementById('demo');
const add = document.getElementById('add');
add.addEventListener('click',() => {
    localStorage.setItem('msg', 'hello world');
    const msg = localStorage.getItem('msg');
    content.innerHTML = msg;
});


const button = document.getElementById('rem');
button.addEventListener('click', () =>{
    localStorage.removeItem('msg');
    content.innerHTML = '';

})