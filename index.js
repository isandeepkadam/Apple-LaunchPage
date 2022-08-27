// Common JS
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control => {
    control.addEventListener('click', (e) => {
        e.preventDefault(); 
    })
});
// End Common JS

// Cube
let x = 0;
let y = 20;
let z= 0;
let bool = true;
let interval; 
const cube = document.querySelector('.cube');

document.querySelector('.top-x-control').addEventListener('click', () =>{
    cube.style.transform = `rotateX(${x+=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;

})

document.querySelector('.bottom-x-control').addEventListener('click', () =>{
    cube.style.transform = `rotateX(${x-=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;

})

document.querySelector('.left-y-control').addEventListener('click', () =>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y-=20}deg) rotateZ(${z}deg)`;

})

document.querySelector('.right-y-control').addEventListener('click', () =>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y+=20}deg) rotateZ(${z}deg)`;

})

document.querySelector('.top-z-control').addEventListener('click', () =>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z-=20}deg)`;

})

document.querySelector('.bottom-z-control').addEventListener('click', () =>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z+=20}deg)`;

})

const playPuase = () => {
    if(bool){
        interval = setInterval(()=> {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
        },100);
    }else{
        clearInterval(interval);
    }
    
};
playPuase();

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false;
    playPuase();
})

document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true;
    playPuase();
})

// End of Cube

// Slideshow

const SlideshowDivs = () => {
    for(let i = 1; i<=5; i++){
        const div = document.createElement('div');
        
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;
 
        i === 1 && div.classList.add('change');

        document.querySelector('.slideshow').appendChild(div);
    }
}
SlideshowDivs();

const divs = document.querySelectorAll('.slideshow div')

let a = 1;

const slideshow = () => {
    setInterval(() => {
        a++;
        const div = document.querySelector('.slideshow .change') 
        
        div.classList.remove('change');
        if(a<divs.length){
            div.nextElementSibling.classList.add('change');
        }else{
            divs[0].classList.add('change');
            a = 1;
        }
    },10000);
}

slideshow();

// End of Slideshow

// Section3

const section3content = document.querySelector('.section-3-content');
window.addEventListener('scroll', () =>{
    if(window.pageYOffset + window.innerHeight >= section3content.offsetTop + section3content.offsetHeight / 2){
        section3content.classList.add('change')
    }
});

// End of  Section3

// Section 4

const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');

const watchTopControl = document.querySelector('.watch-top-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchLeftControl = document.querySelector('.watch-left-control');   

let axisY = 0;
let axisX = 0;

const hideControl = () => {
    if(axisY === -280){
        watchTopControl.classList.add('hidecontrol');
    }else{
        watchTopControl.classList.remove('hidecontrol')
    }

    if(axisY === 280){
        watchBottomControl.classList.add('hidecontrol');
    }else{
        watchBottomControl.classList.remove('hidecontrol')
    }

    if(axisX === -280){
        watchRightControl.classList.add('hidecontrol');
    }else{
        watchRightControl.classList.remove('hidecontrol')
    }

    if(axisX === 280){
        watchLeftControl.classList.add('hidecontrol');
    }else{
        watchLeftControl.classList.remove('hidecontrol')
    }
};

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`;
    hideControl();
})
watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 70}rem`;
    hideControl();
})
watchRightControl.addEventListener('click', () => {
    watchBands.style.marginLeft = `${axisX -= 70}rem`;
    hideControl();
})
watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginLeft = `${axisX += 70}rem`;
    hideControl();
})
// End of Section 4

// Section 5
document.querySelector('.airpods-btn-2').addEventListener('mouseover', () => {
    const img1 = document.querySelector('.airpods-img-1');
    const img2 = document.querySelector('.airpods-img-2');
    img1.classList.add('change1');
    img2.style.backgroundColor = `#fff`; 
})

document.querySelector('.airpods-btn-2').addEventListener('mouseout', () => {
    const img1 = document.querySelector('.airpods-img-1');
    const img2 = document.querySelector('.airpods-img-2');
    img1.classList.remove('change1');
    img2.style.backgroundColor = `#6edae6`;   
})
// End of Section 5