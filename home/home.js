let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-heaader');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(()=> {
        
        logoSpan.forEach((span, idx)=>{
            span.classList.add('activate');
        }, (idx + 1) * 400)
    });

    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{

            setTimeout(()=>{
                span.classList.remove('activate');
                span.classList.add('fade');
            }, (idx + 1) *50)
        })
    },2000);

    setTimeout(()=>{
        intro.style.top = '-100vh'

    })

})

