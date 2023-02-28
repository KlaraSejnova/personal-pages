let frank = document.getElementById('frank');
console.log(frank)
let milos = document.getElementById('milos');
let van = document.getElementById('van');
let sejn = document.getElementById('sejn');

frank.addEventListener('click', show)
milos.addEventListener('click', show2)
function show() {
    van.style.display = 'block';
    frank.style.borderTop = '2px solid black';
    milos.style.borderTop = 'none';
    sejn.style.display = 'none';
}
function show2() {
    van.style.display = 'none';
    milos.style.borderTop = '2px solid black';
    frank.style.borderTop = 'none';
    sejn.style.display = 'block';
}

// program list
let list = document.querySelectorAll('.year');

  for (let i = 0; i < list.length; i++) {  
    list[0].nextElementSibling.classList.add("show");
list[0].parentNode.classList.add("border");
list[0].classList.add("active");
list[0].style.marginBottom = '0';
    if (list[i].nextElementSibling.className === "program"){
      list[i].addEventListener("click", openOnlyOne);
      list[i].addEventListener("click", openClose); 
       }
        else {
      list[i].addEventListener("click", close); 
    }
    }
  function close() {
    this.nextElementSibling.classList.remove("show");
    this.parentNode.classList.remove("border");
    this.classList.remove("active");
    this.style.marginBottom = '-20px';
    }  
  function openOnlyOne() {
    list.forEach(question => {
    question.nextElementSibling.classList.remove("show");
    question.parentNode.classList.remove("border");   
    question.classList.remove("active");
    question.style.marginBottom = '-20px';
     })}
  function openClose() {
    this.nextElementSibling.classList.add("show");
    this.parentNode.classList.add("border");
    this.classList.add("active");
    this.style.marginBottom = '0';
  }
  
  window.addEventListener('load', function () {
    [].forEach.call(document.querySelectorAll('.glider'), function (ele) {
        ele.addEventListener('glider-slide-visible', function (event) {
            var glider
                = Glider(this); console.log('Slide Visible %s', event.detail.slide)
        });
        ele.addEventListener('glider-slide-hidden', function (event) {
            console.log('Slide Hidden %s', event.detail.slide)
        });
        ele.addEventListener('glider-refresh', function (event) {
            console.log('Refresh')
        });
        ele.addEventListener('glider-loaded', function
            (event) {
                console.log('Loaded')
        });
        new Glider(ele, {
          slidesToShow: 1,
          slidesToScroll: 1,
          scrollLock: true,
          draggable: false,
          dots: ele.parentNode.querySelector('.dots'),
          arrows: {
              prev: ele.parentNode.querySelector('.glider-prev'),
              next: ele.parentNode.querySelector('.glider-next')
          },
          rewind: true
        });
    });
  });