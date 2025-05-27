var tl = gsap.timeline();

tl.from("#navbar h3", {
    y: -50,
    opacity: 0,
    delay: 0.3,
    stagger: 0.3,
    duration: 0.8
})

tl.from("#main h1", {
    x: -500,
    opacity: 0,
    stagger: 0.4,
    duration: 0.8
})

tl.from(" img ", {
    x: 100,
    rotate: 45,
    opacity:0,
    duration:0.5,
    stagger: 0.5
});

tl.from("#footer h3", {
    x: -50,
    opacity: 0,
     opacity: 0,
    stagger: 0.4,
    duration: 0.8
})



function showSidebar(){
    const sidebar= document.querySelector('#fake-nav')
    sidebar.style.display="flex"
    gsap.from("#fake-nav h3", {
    y: -50,
    opacity: 0,
    delay: 0.3,
    stagger: 0.3,
    duration: 0.7
})
}

function closeSidebar(){
    const sidebar= document.querySelector('#fake-nav')
    sidebar.style.display="none"

}