// header sticky //
const header = document.getElementById('sticky');
const firstBlock = document.getElementById('sticky__heigth');
const sticky = header.offsetTop;

function mySticky() {
    if (window.scrollY > sticky) {
        header.classList.add('-sticky')
        firstBlock.classList.add('-sticky-height')
    } else {
        header.classList.remove('-sticky')
        firstBlock.classList.remove('-sticky-height')
    }
}

// header topnav //

function topNav(){
    let topNavId = document.getElementById("myTopnav");
    if (topNavId.classList.contains('-resp')) {
        topNavId.classList.remove('-resp')
    } else {
        topNavId.classList.add('-resp')
    }
}

// animation scroll //
let animItems = document.querySelectorAll('.-anim')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('-active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('-active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}