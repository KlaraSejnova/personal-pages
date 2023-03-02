const images = document.querySelectorAll('.carousel-item');
const translateAmount = 1220;
let translate = 0;

slide = (direction) => {
    direction === "prev" ? translate += translateAmount : translate -= translateAmount;
    translate > 0 ? translate = -2440 : translate = translate;
    translate < -2440 ? translate = 0 : translate = translate;
        images.forEach(
        images => (images.style.transform = `translateX(${translate}px)`)
        );        
    }


