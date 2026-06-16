const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck);
    
    
});

function scrollCheck(){
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
}

const animationMove = function(selector){
    const targetEl = document.querySelector(selector);
    const browerScrollY = window.pageYOffset;
    const targetScrollY = targetEl.getBoundingClientRect().top + browerScrollY;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth'})
}