let indexOfVisibleOne=0;
let interval;
const picDivs=document.querySelectorAll('.imageSlider>div');
const smallCircles=document.querySelectorAll('.header>div');
const forwardBtn=document.querySelector('.next');
const backBtn=document.querySelector('.previous');
const makeSlideVisible=()=>{
    const picDiv=document.querySelector('.visible');
    picDiv.classList.remove('visible');
    picDivs[indexOfVisibleOne].classList.add('visible');
}
const makeCircleChosen=()=>{
    const chosenCircle=document.querySelector('.chosen');
    chosenCircle.classList.remove('chosen');
    smallCircles[indexOfVisibleOne].classList.add('chosen');
}
const slideShowRight=()=>{
    if(indexOfVisibleOne<4){
        indexOfVisibleOne++;
        makeSlideVisible();
        makeCircleChosen();
    }
    else{
        indexOfVisibleOne=0;
        makeSlideVisible();
        makeCircleChosen();
    }
}
const slideShowLeft=()=>{
    if(indexOfVisibleOne>0){
        indexOfVisibleOne--;
        makeSlideVisible();
        makeCircleChosen();
    }
    else{
        indexOfVisibleOne=4;
        makeSlideVisible();
        makeCircleChosen();
    }

}
forwardBtn.addEventListener('click',()=>{
    slideShowRight();
    clearInterval(interval);
    interval=setInterval(slideShowRight,5000);   
});
backBtn.addEventListener('click',()=>{
    slideShowLeft();
    clearInterval(interval);
    interval=setInterval(slideShowLeft,5000);
});
smallCircles.forEach((circle,index)=>{
    circle.addEventListener('click',()=>{
        indexOfVisibleOne=index;
        makeSlideVisible();
        makeCircleChosen();
        clearInterval(interval);
        interval=setInterval(slideShow,5000);
    })
});
interval=setInterval(slideShowRight,5000);