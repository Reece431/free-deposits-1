window.addEventListener('resize', () =>{
    scale(window.innerWidth);
})

window.addEventListener('load', () =>{
    scale(window.innerWidth);
})

function scale(x){
    if(x >= 481){
        alert('Site not optimised for larger screens');
    }
}