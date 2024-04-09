// hamburger menu

let x = document.getElementById("top_nav");

function hamburgerToggle() {
    x.classList.toggle("open");
}


// alert

function hello() {
    alert("This is my portfolio web page!")
}

// load more..

let y = document.getElementById("portfolio");

function showMore() {
    y.classList.toggle("more");
}

// modal img

let modal = document.getElementById("myModal");

let images = document.getElementsByClassName('myImages');
let modalImg = document.getElementById("img01");

for (let i = 0; i < images.length; i++) {
    let img = images[i];

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}